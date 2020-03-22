import React from 'react';
import UserRow from '../components/UserRow/UserRow';
import { routesType } from '../types';

function Home({ routes }) {
	return (
		<div>
			<UserRow
				avatarUrl="https://github.com/images/error/octocat_happy.gif"
				followers={100}
				following={200}
				login="octocat"
				singleUserRoute={routes.singleUser.url}
			/>
		</div>
	);
}

Home.propTypes = {
	...routesType,
};

export default Home;
