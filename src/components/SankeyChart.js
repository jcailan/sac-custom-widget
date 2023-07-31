/* eslint-disable no-console */
(function() {
	const echartCdn = "https://cdn.staticfile.org/echarts/5.3.0/echarts.min.js";

	const getScriptPromisify = (src) => {
		return new Promise((resolve) => {
			// eslint-disable-next-line no-undef
			$.getScript(src, resolve);
		});
	};

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

	const getNodesAndLinks = (data, dimensions) => {
		const records = JSON.parse(JSON.stringify(data));
		const nodes = dimensions.length === 1 ? new Set(["Total"]) : new Set();
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
			this._echart = null;
		}

		async render(dataBinding) {
			await getScriptPromisify(echartCdn);
			this.dispose();

			if (dataBinding.state !== "success") {
				return;
			}

			const { data, metadata } = dataBinding;
			const { dimensions } = parseMetadata(metadata);
			const { nodes, links } = getNodesAndLinks(data, dimensions);

			// eslint-disable-next-line no-undef
			this._echart = echarts.init(this._root);
			// https://echarts.apache.org/examples/en/editor.html?c=sankey-levels
			// https://echarts.apache.org/en/option.html

			console.log(nodes);
			console.log(links);
			this._echart.setOption({
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
									color: "#488ccc"
								},
								lineStyle: {
									color: "source",
									opacity: 0.6
								}
							},
							{
								depth: 1,
								itemStyle: {
									color: "#488ccc"
								},
								lineStyle: {
									color: "source",
									opacity: 0.4
								}
							},
							{
								depth: 2,
								itemStyle: {
									color: "#488ccc"
								},
								lineStyle: {
									color: "source",
									opacity: 0.2
								}
							},
							{
								depth: 3,
								itemStyle: {
									color: "#488ccc"
								},
								lineStyle: {
									color: "source",
									opacity: 0.1
								}
							}
						],
						lineStyle: {
							curveness: 0.7
						}
					}
				]
			});
		}

		dispose() {
			if (this._echart) {
				// eslint-disable-next-line no-undef
				echarts.dispose(this._echart);
			}
		}
	}

	// eslint-disable-next-line no-undef
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

	// eslint-disable-next-line no-undef
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

		// ------------------
		//
		// ------------------
		render() {
			// eslint-disable-next-line no-undef
			if (!document.contains(this)) {
				// Delay the render to assure the custom widget is appended on dom
				setTimeout(this.render.bind(this), 0);
				return;
			}

			this._renderer.render(this.dataBinding);
		}

		dispose() {
			this._renderer.dispose();
		}
	}

	// eslint-disable-next-line no-undef
	customElements.define("com-sap-sac-sample-echarts-sankey", Main);
})();