import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents-fiori/dist/DynamicSideContent";

import "./BaseComponent";
import "./widget/main";
import "./widget/styling";

import BaseComponent from "./BaseComponent";
import { twoDimensions as data } from "./data/products";

window.addEventListener("load", () => {
	const main = document.getElementById("main") as BaseComponent;
	main.dataBinding = data;
	main.onCustomWidgetAfterUpdate(main);

	const styling = document.getElementById("styling") as BaseComponent;
	styling.addEventListener("propertiesChanged", event => {
		const { properties } = event.detail;
		for (const property in properties) {
			main[property] = properties[property];
		}
		main.onCustomWidgetAfterUpdate(main);
	});
});