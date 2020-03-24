import PropTypes from 'prop-types';

export default function useIntersectionObserver({ callback }) {
	return new IntersectionObserver(function(entries) {
		if (entries[0].intersectionRatio <= 0) return;
		callback(entries);
	});
}

useIntersectionObserver.propTypes = {
	callback: PropTypes.func,
};
