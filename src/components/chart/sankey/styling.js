(function() {
	// require("@ui5/webcomponents/dist/Assets.js");
	// require("@ui5/webcomponents-fiori/dist/Assets.js");
	// const { setTheme } = require("@ui5/webcomponents-base/dist/config/Theme.js");
	// setTheme("sap_horizon");

	require("@ui5/webcomponents/dist/CheckBox");
	require("@ui5/webcomponents/dist/Button");
	require("@ui5/webcomponents/dist/ColorPalette.js");

	const template = document.createElement('template');
	template.innerHTML = `
	<style>
	#root {
		margin: 0.5rem;
		/* display: flex;
		flex-direction: column; */
	}
	</style>
	<div id="root">
		<ui5-checkbox id="isTotalIncluded" text="Include Total"></ui5-checkbox>
		<br />
		<ui5-color-palette>
			<ui5-color-palette-item value="darkblue" class="ui5-content-density-compact"></ui5-color-palette-item>
		</ui5-color-palette>
		<br />
		<ui5-button id="apply" class="ui5-content-density-compact">Apply</ui5-button>
	</div>
	`;

	class Styling extends HTMLElement {
		constructor() {
			super();

			this._shadowRoot = this.attachShadow({ mode: 'open' });
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._root = this._shadowRoot.getElementById('root');

			this._apply = this._shadowRoot.getElementById('apply');
			this._apply.addEventListener('click', () => {
				const isTotalIncluded = this._shadowRoot.getElementById('isTotalIncluded').checked;
				this.dispatchEvent(new CustomEvent('propertiesChanged', { detail: { properties: { isTotalIncluded } } }));
			});
		}

		// ------------------
		// LifecycleCallbacks
		// ------------------
		async onCustomWidgetBeforeUpdate(changedProps) {
		}

		async onCustomWidgetAfterUpdate(properties) {
			if (properties.isTotalIncluded !== undefined) {
				this._shadowRoot.getElementById('isTotalIncluded').checked = properties.isTotalIncluded;
			}
		}

		async onCustomWidgetResize(width, height) {
		}

		async onCustomWidgetDestroy() {
			this.dispose();
		}

		// ------------------
		//
		// ------------------

		dispose() {
		}
	}

	customElements.define('rizing-sankey-chart-styling', Styling);
})();