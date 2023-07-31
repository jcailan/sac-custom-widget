import "./components/BaseComponent";
import "./components/SankeyChart";

import BaseComponent from "./components/BaseComponent";
import { oneDimension as data } from "./data/products";

window.addEventListener("load", () => {
	const element = document.getElementById("sankey") as BaseComponent;
	element.dataBinding = data;
	element.onCustomWidgetAfterUpdate();
});