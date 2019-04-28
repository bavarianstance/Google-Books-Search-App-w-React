// init npm pkgs
const axios = require("axios");
const db = require("../models");
const path = require("path");

// def get route in mongodb for saved books
module.exports = function(app) {
	app.get("/api/books", (request, response) => {
		db.Book.find().then(
			(data) => {
				response.json(data);
			}).catch((err) => {
				response.json({error: err});
			});
	});
// def main search route for google books api
	app.post("/search", (request, response) => {
		// replaces whitespace with + for search query
		let search = request.body.title.replace(/\s/g, "+");
		axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=15`)
		.then((result) => {
			response.json(result.data.items)
		}).catch((err) => {
			response.json({error: err});
		});
	});
// def post route for saved books
	app.post("/api/books", (request, response) => {
		db.Book.create(request.body).then(
			(data) => {
				response.json({successful: data});
			}).catch ((err) => {
				response.json({error:err});
			});
	});
// def delete route for saved books
	app.delete("/api/books/:id", (request, response) => {
		db.Book.findByIdAndDelete(request.params.id).then(
			(data) => {
				response.json({successful:data});
			}).catch((err) => {
				response.json({error: err});
			});
	});
// def route for react app for all other routes
	app.get("*", (request, response) => {
		response.sendFile(path.join(__dirname, "../client/build/index.html"));
	});
}