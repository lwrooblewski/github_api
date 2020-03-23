import axios from 'axios';

async function useApi(method) {
	return axios.get(method);
}

export default useApi;
