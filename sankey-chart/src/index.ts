import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents-fiori/dist/DynamicSideContent";

import "./widget/main";
import "./widget/styling";

import BaseComponent from "./lib/BaseComponent";
import PropertiesChangedEvent from "./lib/PropertiesChangedEvent";
import { twoDimensions as data } from "./data/products";

window.addEventListener("load", () => {
	const main = document.getElementById("main") as BaseComponent;
	main.dataBinding = data;
	main.onCustomWidgetAfterUpdate(main);

	const styling = document.getElementById("styling") as BaseComponent;
	styling.addEventListener("propertiesChanged", event => {
		const { properties } = (event as PropertiesChangedEvent).detail;
		for (const property in properties) {
			main[property] = properties[property];
		}
		main.onCustomWidgetAfterUpdate(main);
	});
});