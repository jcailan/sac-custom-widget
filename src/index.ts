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

const data2 = {
	state: "success",
	data: [
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC4]",
				"label": "Alcohol",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA1]",
				"label": "California",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 37250868,
				"formatted": "37.25M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC4]",
				"label": "Alcohol",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA2]",
				"label": "Nevada",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 4823612,
				"formatted": "4.82M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC4]",
				"label": "Alcohol",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA3]",
				"label": "Oregon",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 15822968,
				"formatted": "15.82M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC1]",
				"label": "Carbonated Drinks",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA1]",
				"label": "California",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 31785840,
				"formatted": "31.79M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC1]",
				"label": "Carbonated Drinks",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA2]",
				"label": "Nevada",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 4817708,
				"formatted": "4.82M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC1]",
				"label": "Carbonated Drinks",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA3]",
				"label": "Oregon",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 11998672,
				"formatted": "12.00M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC2]",
				"label": "Juices",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA1]",
				"label": "California",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 61989780,
				"formatted": "61.99M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC2]",
				"label": "Juices",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA2]",
				"label": "Nevada",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 9391256,
				"formatted": "9.39M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC2]",
				"label": "Juices",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA3]",
				"label": "Oregon",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 24209764,
				"formatted": "24.21M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC3]",
				"label": "Others",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA1]",
				"label": "California",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 1453932,
				"formatted": "1.45M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC3]",
				"label": "Others",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA2]",
				"label": "Nevada",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 157200,
				"formatted": "0.16M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC3]",
				"label": "Others",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA3]",
				"label": "Oregon",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 606012,
				"formatted": "0.61M"
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
					"dimensions_0",
					"dimensions_1"
				],
				"type": "dimension"
			}
		},
		"dimensions": {
			"dimensions_0": {
				"id": "Product_3e315003an",
				"description": "Product"
			},
			"dimensions_1": {
				"id": "Location_4nm2e04531",
				"description": "Location"
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

const data3 = {
	state: "success",
	data: [
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC4]",
				"label": "Alcohol",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA1]",
				"label": "California",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 37250868,
				"formatted": "37.25M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC4]",
				"label": "Alcohol",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA2]",
				"label": "Nevada",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 4823612,
				"formatted": "4.82M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC4]",
				"label": "Alcohol",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA3]",
				"label": "Oregon",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 15822968,
				"formatted": "15.82M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC1]",
				"label": "Carbonated Drinks",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA1]",
				"label": "California",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 31785840,
				"formatted": "31.79M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC1]",
				"label": "Carbonated Drinks",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA2]",
				"label": "Nevada",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 4817708,
				"formatted": "4.82M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC1]",
				"label": "Carbonated Drinks",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA3]",
				"label": "Oregon",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 11998672,
				"formatted": "12.00M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC2]",
				"label": "Juices",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA1]",
				"label": "California",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 61989780,
				"formatted": "61.99M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC2]",
				"label": "Juices",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA2]",
				"label": "Nevada",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 9391256,
				"formatted": "9.39M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC2]",
				"label": "Juices",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA3]",
				"label": "Oregon",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 24209764,
				"formatted": "24.21M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC3]",
				"label": "Others",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA1]",
				"label": "California",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 1453932,
				"formatted": "1.45M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC3]",
				"label": "Others",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA2]",
				"label": "Nevada",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 157200,
				"formatted": "0.16M"
			}
		},
		{
			"dimensions_0": {
				"id": "[Product_3e315003an].[Product_Catego_3o3x5e06y2].&[PC3]",
				"label": "Others",
				"isNode": true,
				"isCollapsed": true
			},
			"dimensions_1": {
				"id": "[Location_4nm2e04531].[State_47acc246_4m5x6u3k6s].&[SA3]",
				"label": "Oregon",
				"isNode": true,
				"isCollapsed": true
			},
			"measures_0": {
				"raw": 606012,
				"formatted": "0.61M"
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
					"dimensions_0",
					"dimensions_1",
					"dimensions_2"
				],
				"type": "dimension"
			}
		},
		"dimensions": {
			"dimensions_0": {
				"id": "Product_3e315003an",
				"description": "Product"
			},
			"dimensions_1": {
				"id": "Location_4nm2e04531",
				"description": "Location"
			},
			"dimensions_2": {
				"id": "Account_BestRunJ_sold",
				"description": ""
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
	element.dataBinding = data3;
	element.onCustomWidgetAfterUpdate();
});