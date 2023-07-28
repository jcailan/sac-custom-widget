import "./components/BaseComponent";
import "./components/SankeyChart";

import BaseComponent from "./components/BaseComponent";

const data = {
	state: "success",
	data: [
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC4]",
				"label": "Alcohol",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 57897448,
				"formatted": "57.90M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC1]",
				"label": "Carbonated Drinks",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 48602220,
				"formatted": "48.60M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC2]",
				"label": "Juices",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 95590800,
				"formatted": "95.59M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC3]",
				"label": "Others",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 2217144,
				"formatted": "2.22M"
			}
		}
	],
	metadata: {
		"feeds": {
			"measures": {
				"values": [
					"measures_0"
				],
				"type": "mainStructureMember"
			},
			"dimensions": {
				"values": [
					"dimensions_0"
				],
				"type": "dimension"
			}
		},
		"dimensions": {
			"dimensions_0": {
				"id": "Product_3e315003an",
				"description": "Product"
			}
		},
		"mainStructureMembers": {
			"measures_0": {
				"id": "[Account_BestRunJ_sold].[parentId].&[Quantity_sold]",
				"label": "Quantity sold"
			}
		}
	}
};

window.addEventListener("load", () => {
	const element = document.getElementById("sankey") as BaseComponent;
	element.dataBinding = data;
	element.onCustomWidgetAfterUpdate();
});