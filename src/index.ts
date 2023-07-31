import "./components/BaseComponent";
import "./components/chart/sankey/main";

import BaseComponent from "./components/BaseComponent";
import { twoDimensions as data } from "./data/products";

window.addEventListener("load", () => {
	const element = document.getElementById("sankey") as BaseComponent;
	element.dataBinding = data;
	element.onCustomWidgetAfterUpdate();
});