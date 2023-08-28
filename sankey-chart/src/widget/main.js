import * as echarts from "echarts";

const parseMetadata = metadata => {
	const { dimensions: dimensionsMap, mainStructureMembers: measuresMap } = metadata;
	const dimensions = [];
	for (const key in dimensionsMap) {
		const dimension = dimensionsMap[key];
		dimensions.push({ key, ...dimension });
	}
	const measures = [];
	for (const key in measuresMap) {
		const measure = measuresMap[key];
		measures.push({ key, ...measure });
	}
	return { dimensions, measures, dimensionsMap, measuresMap };
};

const push = (data, { source, target, value }) => {
	const found = data.find(record => record.source === source && record.target === target);
	if (found) {
		found.value = found.value + value;
	} else {
		data.push({ source, target, value });
	}
};

const getNodesAndLinks = (data, dimensions, properties) => {
	const { isTotalIncluded } = properties;
	const records = JSON.parse(JSON.stringify(data));
	const nodes = isTotalIncluded || dimensions.length === 1 ? new Set(["Total"]) : new Set();
	const links = [];

	records.forEach(record => {
		dimensions.forEach((_, index) => {
			const child = record[`dimensions_${index}`];
			if (!child) {
				return;
			}

			const target = child.label;
			const parent = record[`dimensions_${index + 1}`];
			const source = parent ? parent.label : "Total";
			nodes.add(target);

			push(links, {
				source,
				target,
				value: record.measures_0.raw
			});
		});
	});

	return {
		nodes: [...nodes].map(node => {
			return { name: node };
		}),
		links
	};
};

class Renderer {
	constructor(root) {
		this._root = root;
		this._echarts = null;
	}

	async render(dataBinding, properties) {
		this.dispose();

		if (dataBinding.state !== "success") {
			return;
		}

		const { data, metadata } = dataBinding;
		const { dimensions } = parseMetadata(metadata);
		const { nodes, links } = getNodesAndLinks(data, dimensions, properties);

		this._echarts = echarts.init(this._root);
		this._echarts.setOption({
			title: {
				text: ""
			},
			tooltip: {
				trigger: "item",
				triggerOn: "mousemove"
			},
			series: [
				{
					type: "sankey",
					data: nodes,
					links: links,
					emphasis: {
						focus: "adjacency"
					},
					levels: [
						{
							depth: 0,
							itemStyle: {
								xcolor: "#0092D1"
							},
							lineStyle: {
								opacity: 0.5
							}
						},
						{
							depth: 1,
							itemStyle: {
								xcolor: "#E6600D"
							},
							lineStyle: {
								opacity: 0.4
							}
						},
						{
							depth: 2,
							itemStyle: {
								xcolor: "#1A9898"
							},
							lineStyle: {
								opacity: 0.3
							}
						},
						{
							depth: 3,
							itemStyle: {
								color: "#E09D00"
							},
							lineStyle: {
								opacity: 0.2
							}
						}
					],
					lineStyle: {
						color: 'gradient',
						curveness: 0.5
					}
				}
			]
		});
	}

	dispose() {
		if (this._echarts) {
			echarts.dispose(this._echarts);
		}
	}
}

const template = document.createElement("template");
template.innerHTML = `
	<style>
		#chart {
			width: 100%;
			height: 100%;
		}
	</style>
	<div id="root" style="width: 100%; height: 100%;">
		<div id="chart"></div>
	</div>
`;

class Main extends HTMLElement {
	constructor() {
		super();

		this._shadowRoot = this.attachShadow({ mode: "open" });
		this._shadowRoot.appendChild(template.content.cloneNode(true));
		this._root = this._shadowRoot.getElementById("root");
		this._renderer = new Renderer(this._root);
	}

	// ------------------
	// LifecycleCallbacks
	// ------------------
	async onCustomWidgetBeforeUpdate() {
	}

	onCustomWidgetAfterUpdate() {
		this.render();
	}

	onCustomWidgetResize() {
		this.render();
	}

	onCustomWidgetDestroy() {
		this.dispose();
	}

	render() {
		if (!document.contains(this)) {
			// Delay the render to assure the custom widget is appended on dom
			setTimeout(this.render.bind(this), 0);
			return;
		}

		this._renderer.render(this.dataBinding, this);
	}

	dispose() {
		this._renderer.dispose();
	}
}

customElements.define("rizing-sankey-chart", Main);