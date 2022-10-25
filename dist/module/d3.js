import { hierarchy, tree } from 'd3-hierarchy';

function getTreeData(props) {
  const margins = props.margins || {
    bottom: 10,
    left: props.direction !== 'rtl' ? 20 : 150,
    right: props.direction !== 'rtl' ? 150 : 20,
    top: 10
  };
  const contentWidth = props.width - margins.left - margins.right;
  const contentHeight = props.height - margins.top - margins.bottom;
  const data = hierarchy(props.data, props.getChildren);
  const root = tree().size([contentHeight, contentWidth])(data);

  // d3 gives us a top to down tree, but we will display it left to right/right to left, so x and y need to be swapped
  const links = root.links().map(link => ({
    ...link,
    source: {
      ...link.source,
      x: props.direction !== 'rtl' ? link.source.y : contentWidth - link.source.y,
      y: link.source.x
    },
    target: {
      ...link.target,
      x: props.direction !== 'rtl' ? link.target.y : contentWidth - link.target.y,
      y: link.target.x
    }
  }));
  const nodes = root.descendants().map(node => ({
    ...node,
    x: props.direction !== 'rtl' ? node.y : contentWidth - node.y,
    y: node.x
  }));
  return {
    links,
    margins,
    nodes
  };
}

export { getTreeData as default };
