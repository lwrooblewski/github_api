import React from 'react';
import renderer from 'react-test-renderer';
import { LocationProvider } from '@reach/router';
import Navigation from '../Navigation';
import routes from '../../../router/routes';

it('renders correctly', () => {
	const tree = renderer
		.create(
			<LocationProvider>
				<Navigation routes={routes} />
			</LocationProvider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
