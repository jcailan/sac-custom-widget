import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents-fiori/dist/DynamicSideContent";

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