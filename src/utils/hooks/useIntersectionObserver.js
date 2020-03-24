import PropTypes from 'prop-types';

export default function useIntersectionObserver({ callback }) {
	return new IntersectionObserver(function(entries) {
		callback(entries);
	});
}

useIntersectionObserver.propTypes = {
	callback: PropTypes.func,
};
