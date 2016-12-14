react-tree-graph
================
A simple react component which renders data as a tree using svg.

[Demo](http://jpb12.github.io/tree-viewer/)
-------------------------------------------

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

Configuration
-------------

| Property | Type | Mandatory | Default | Description |
|:---|:---|:---|:---|:---|
| `data` | object | yes | | The data to be rendered as a tree. Must be in a format accepted by [d3.hierarchy](https://github.com/d3/d3-hierarchy/blob/master/README.md#hierarchy). |
| `margins` | object | | `{ bottom : 10, left : 20, right : 150, top : 10}` | The margins around the content.  The right margin should be larger to include the rendered label text. |
| `height` | number | yes | | The height of the rendered tree, including margins. |
| `width` | number | yes | | The width of the rendered tree, including margins. |
| `keyProp` | string | | `"name"` | The property on each node to use as a key. |
| `labelProp` | string | | `"name"` | The property on each node to render as label text. |
| `linkClass` | string | | `"link"` | The class to add to each `<path>` element linking two nodes. |
| `linkClickHandler` | function | | | A function called when a link is clicked.  The source and target keys are passed in as paramters. |
| `nodeClass` | string | | `"node"` | The class to add to each `<g>` element, representing a node. |
| `nodeClickHandler` | function | | | A function called when a node is clicked.  The node key is passed as an argument. |
| `nodeOffset` | number | | `3.5` | The height offset for the label of a node.  May need to be adjusted depending on radius and font size. |
| `nodeRadius` | number | | `5` | The radius of the rendered node. |

Node properties can be set for individual nodes by setting them on the node with the following mapping:

| Global | Node |
|:---|:---|
| `nodeClass` | `className` |
| `nodeClickHandler` | `onClick` |
| `nodeOffset` | `offset` |
| `nodeRadius` | `radius` |