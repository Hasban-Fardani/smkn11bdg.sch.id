export const fetchData = async (url: string, init?: RequestInit) => {
	const response = await fetch(url, init);
	const data = await response.json();
	return data;
};
