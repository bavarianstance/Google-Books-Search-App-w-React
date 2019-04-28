const axios = require("axios");
const db = require("../models");
const path = require("path");

module.exports = function(app) {
	app.get("/api/books", (request, response) => {
		db.Book.find().then(
			(data) => {
				response.json(data);
			}).catch((err) => {
				response.json({error: err});
			});
	});

	app.post("/search", (request, response) => {
		let search = request.body.title.replace(/\s/g, "+");
		axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=15`)
		.then((result) => {
			response.json(result.data.items)
		}).catch((err) => {
			response.json({error: err});
		});
	});

	app.post("/api/books", (request, response) => {
		db.Book.create(request.body).then(
			(data) => {
				response.json({successful: data});
			}).catch ((err) => {
				response.json({error:err});
			});
	});

	app.delete("/api/books/:id", (request, response) => {
		db.Book.findByIdAndDelete(request.params.id).then(
			(data) => {
				response.json({successful:data});
			}).catch((err) => {
				response.json({error: err});
			});
	});

	app.get("*", (request, response) => {
		  // response.sendFile('index.html');
		// const index = path.join(__dirname, 'build', 'index.html');
  		// 	response.sendFile(index);
		response.sendFile(path.join(__dirname, "../client/build/index.html"));
	});
}