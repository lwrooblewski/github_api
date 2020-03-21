import { oneOfType, arrayOf, node } from 'prop-types';

const children = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default children;
