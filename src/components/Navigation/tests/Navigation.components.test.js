import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '../Navigation';
import routes from '../../../router/routes';

it('renders correctly', () => {
	const tree = renderer.create(<Navigation routes={routes} />).toJSON();
	expect(tree).toMatchSnapshot();
});
