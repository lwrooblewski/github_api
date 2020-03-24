import React, { forwardRef } from 'react';
import { refType } from '@root/types';

const Loading = forwardRef((props, ref) => {
	return <span ref={ref}>Loading...</span>;
});

Loading.propTypes = {
	ref: refType,
};

export default Loading;
