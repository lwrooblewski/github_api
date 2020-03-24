import PropTypes from 'prop-types';

const refType = PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]);

export default refType;
