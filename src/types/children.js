import { oneOfType, arrayOf, node } from 'prop-types';

const children = oneOfType([arrayOf(node), node]).isRequired;

export default children;
