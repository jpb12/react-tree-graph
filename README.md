<!--
  Title: React Tree Graph
  Description: A react library for generating a tree graph from data using d3.
  Author: James Brierley
-->

react-tree-graph
================

[![Build Status](https://travis-ci.org/jpb12/react-tree-graph.svg?branch=master)](https://travis-ci.org/jpb12/react-tree-graph) [![Coverage Status](https://coveralls.io/repos/github/jpb12/react-tree-graph/badge.svg?branch=master)](https://coveralls.io/github/jpb12/react-tree-graph?branch=master) [![npm version](https://img.shields.io/npm/v/react-tree-graph.svg?style=flat)](https://www.npmjs.com/package/react-tree-graph) [![npm](https://img.shields.io/npm/dt/react-tree-graph.svg)](https://www.npmjs.com/package/react-tree-graph) [![Greenkeeper badge](https://badges.greenkeeper.io/jpb12/react-tree-graph.svg)](https://greenkeeper.io/)

A simple react component which renders data as a tree using svg.

Check out the [examples](https://jpb12.github.io/react-tree-graph) and the [demo](https://jpb12.github.io/tree-viewer/).

Older Versions
--------------
[3.X](https://github.com/jpb12/react-tree-graph/tree/v3.3.0)
[2.X](https://github.com/jpb12/react-tree-graph/tree/v2.0.0)
[1.X](https://github.com/jpb12/react-tree-graph/tree/v1.7.2)

Installing
----------
```sh
npm install react-tree-graph --save
```

Usage
-----

```javascript
import Tree from 'react-tree-graph';

let data = {
	name: 'Parent',
	children: [{
		name: 'Child One'
	}, {
		name: 'Child Two'
	}]
};

<Tree
	data={data}
	height={400}
	width={400}/>);
```

If you are using webpack, and have [css-loader](https://www.npmjs.com/package/css-loader), you can include some default styles with:

```javascript
import 'react-tree-graph/dist/style.css'
```

Alternatively, both the JavaScript and CSS can be included directly from the dist folder with script tags.

Configuration
-------------

| Property | Type | Mandatory | Default | Description |
|:---|:---|:---|:---|:---|
| `data` | object | yes | | The data to be rendered as a tree. Must be in a format accepted by [d3.hierarchy](https://github.com/d3/d3-hierarchy/blob/master/README.md#hierarchy). |
| `margins` | object | | `{ bottom : 10, left : 20, right : 150, top : 10}` | The margins around the content. The right margin should be larger to include the rendered label text. |
| `height` | number | yes | | The height of the rendered tree, including margins. |
| `width` | number | yes | | The width of the rendered tree, including margins. |
| `children` | node | no | | Will be rendered as children of the SVG, before the links and nodes. |
| `animated` | boolean | | false | If true, the tree will animate. |
| `duration` | number | | 500 | The duration in milliseconds of animations. |
| `easing` | function(interval) | | [d3-ease](https://www.npmjs.com/package/d3-ease).easeQuadOut | The easing function for animations. Takes in a number between 0 and 1 and returns a number between 0 and 1. |
| `steps` | number | | 20 | The number of steps in animations. |
| `getChildren` | function(node) | | node => node.children | A function that returns the children for a node, or null/undefined if no children exist |
| `keyProp` | string | | "name" | The property on each node to use as a key. |
| `labelProp` | string | | "name" | The property on each node to render as label text. |
| `nodeOffset` | number | | 3.5 | The height offset for the label of a node. May need to be adjusted depending on radius and font size. |
| `nodeRadius` | number | | 5 | The radius of the rendered node. |
| `circleProps` | object | | `{}` | Props to be added to the `<circle>` element. |
| `gProps` | object | | `{ className: 'node' }` | Props to be added to the `<g>` element. |
| `pathProps` | object | | `{ className: 'link' }` | Props to be added to the `<path>` element. |
| `svgProps` | object | | `{}` | Props to be added to the `<svg>` element. |
| `textProps` | object | | `{}` | Props to be added to the `<text>` element. |

### Events

Event handlers in `circleProps`, `gProp` and `textProps` will be called with the node ID as an additional parameter.

`function(event, nodeId) { ... }`

Event handlers in `pathProps` will be called with the source and node IDs as additional parameters.

`function(event, sourceNodeId, targetNodeId) { ... }`

### Overriding props

The following properties can also be overridden by setting then for individual nodes.

| Prop |
|:---|
| `keyProp` |
| `labelProp` |
| `nodeOffset` |
| `nodeRadius` |

The following object properties, if set on individual nodes, will be combined with the object properties set on the tree. If a property exists in both objects, the value from the node will be taken.

| Prop | Description |
|:---|:---|
| `circleProps` | |
| `gProps` | |
| `pathProps` | Props for a path are taken from the target node. |
| `textProps` | |
