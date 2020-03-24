import React from 'react';
import renderer from 'react-test-renderer';
import {
	BrowserRouter,
} from "react-router-dom";
import Navigation from '../Navigation';
import routes from '../../../router/routes';

it('renders correctly', () => {
	const tree = renderer
		.create(
			<BrowserRouter>
				<Navigation routes={routes} />
			</BrowserRouter>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
