import axios from "axios";
// def routes using axios
export default {
	getBooks: () => {
		return axios.get("/api/books");
	},
	searchBooks: (query) => {
		return axios.post("/search", {title: query});
	},
	saveBook: (data) => {
		return axios.post("/api/books", data);
	},
	deleteBook: (id) => {
		return axios.delete(`/api/books/${id}`);
	}
}