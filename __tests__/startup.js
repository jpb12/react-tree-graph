import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

// JSDom does not have structuredClone method
global.structuredClone = val => JSON.parse(JSON.stringify(val));

Enzyme.configure({ adapter: new Adapter() });