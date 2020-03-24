import React from 'react';
import { Redirect } from 'react-router-dom';
import {routesType} from "@root/types";

function Home({ routes }) {
	return <Redirect to={routes.usersList.url} />;
}

Home.propTypes = {
	routes: routesType,
};

export default Home;
