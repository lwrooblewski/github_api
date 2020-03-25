import { useState, useEffect } from 'react';

const useIntersectionObserver = (ref, { threshold = 0, root = null, rootMargin = '0%' } = {}) => {
	const [inView, setInView] = useState(false);
	const observer = new IntersectionObserver(
		([entry]) => {
			if (!entry) return;
			setInView(entry.intersectionRatio > 0);
		},
		{
			threshold,
			root,
			rootMargin,
		},
	);

	useEffect(() => {
		if (ref.current) {
			observer.observe(ref.current);
		}
	});

	return inView;
};

export default useIntersectionObserver;
