import axios from 'axios';

async function useApi(method) {
	await axios.get(method);
}

export default useApi;
