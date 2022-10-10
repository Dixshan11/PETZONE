import http from "./httpService";

const apiEndpoint = "api/tempproducts";

function postUrl(id) {
	return `${apiEndpoint}/${id}`;
}

export function savePost(post) {
	// if (post._id) {
	// 	const body = { ...post };
	// 	delete body._id;
	// 	http.put(postUrl(post._id), body);
	// 	return;
	// }

	return http.post(apiEndpoint, post);
}