import { hierarchy, tree } from 'd3-hierarchy';

function getTreeData(props) {
  const contentWidth = props.width - props.margins.left - props.margins.right;
  const contentHeight = props.height - props.margins.top - props.margins.bottom;
  let data = hierarchy(props.data, props.getChildren);
  let root = tree().size([contentHeight, contentWidth])(data);
  let nodes = root.descendants();
  let links = root.links();
  nodes.forEach(node => {
    node.y += props.margins.top;
  });
  return {
    nodes,
    links
  };
}

export { getTreeData as default };
