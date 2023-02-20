import { Tree } from '../../src';
import { TreeArgTypes } from './argTypes';

export default {
	title: 'Tree/Nodes',
	component: Tree,
	argTypes: TreeArgTypes
};

export { RectangularNodes } from './nodes/rect';
export { PolygonNodes } from './nodes/polygon';
export { ImageNodes } from './nodes/image';
export { CustomNodeProps } from './nodes/nodeProps';