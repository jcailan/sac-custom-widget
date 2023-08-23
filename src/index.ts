import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/Assets.js";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
setTheme("sap_horizon");

import "@ui5/webcomponents-fiori/dist/DynamicSideContent";
// import "@ui5/webcomponents/dist/CheckBox";
// import "@ui5/webcomponents/dist/Button";
// import "@ui5/webcomponents/dist/ColorPalette.js";

import "./components/BaseComponent";
import "./components/chart/sankey/main";
import "./components/chart/sankey/styling";

import BaseComponent from "./components/BaseComponent";
import { twoDimensions as data } from "./data/products";

window.addEventListener("load", () => {
	const main = document.getElementById("main") as BaseComponent;
	main.dataBinding = data;
	main.onCustomWidgetAfterUpdate({});

	const styling = document.getElementById("styling") as BaseComponent;
	styling.addEventListener("propertiesChanged", event => {
		main.onCustomWidgetAfterUpdate(event.detail.properties);
	});
});