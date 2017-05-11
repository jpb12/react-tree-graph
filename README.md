react-tree-graph &middot; [![Build Status](https://travis-ci.org/jpb12/react-tree-graph.svg?branch=master)](https://travis-ci.org/jpb12/react-tree-graph) [![Coverage Status](https://coveralls.io/repos/github/jpb12/react-tree-graph/badge.svg?branch=master)](https://coveralls.io/github/jpb12/react-tree-graph?branch=master) [![npm version](https://img.shields.io/npm/v/react-tree-graph.svg?style=flat)](https://www.npmjs.com/package/react-tree-graph)
================
A simple react component which renders data as a tree using svg.

Demo
----

[Demo tree view](https://jpb12.github.io/tree-viewer/)

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
		name: 'Child One',
		children: []
	}, {
		name: 'Child Two',
		children: []
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
| `margins` | object | | `{ bottom : 10, left : 20, right : 150, top : 10}` | The margins around the content.  The right margin should be larger to include the rendered label text. |
| `height` | number | yes | | The height of the rendered tree, including margins. |
| `width` | number | yes | | The width of the rendered tree, including margins. |
| `getChildren` | function(node) | | node => node.children | A function that returns the children for a node, or null/undefined if no children exist |
| `keyProp` | string | | `"name"` | The property on each node to use as a key. |
| `labelProp` | string | | `"name"` | The property on each node to render as label text. |
| `linkClass` | string | | `"link"` | The class to add to each `<path>` element linking two nodes. |
| `linkClickHandler` | function(sourceKey, targetKey, event) | | | A function called when a link is clicked. |
| `nodeClass` | string | | `"node"` | The class to add to each `<g>` element, representing a node. |
| `nodeClickHandler` | function(nodeKey, event) | | | A function called when a node is clicked. |
| `nodeOffset` | number | | `3.5` | The height offset for the label of a node.  May need to be adjusted depending on radius and font size. |
| `nodeRadius` | number | | `5` | The radius of the rendered node. |

Node properties can be set for individual nodes by setting them on the node with the following mapping:

| Global | Node |
|:---|:---|
| `nodeClass` | `className` |
| `nodeClickHandler` | `onClick` |
| `nodeOffset` | `offset` |
| `nodeRadius` | `radius` |
