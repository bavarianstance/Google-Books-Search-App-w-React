// import components
import React from "react";
import SearchForm from "../components/SearchForm";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";

// init search constructor function
class Search extends React.Component {
	constructor(props) {
		super(props);
		// init main  for book input and associated data
		this.state = {
			bookInput: "",
			bookData: []
		}
		// bind search and onchange events
		this.handleSearchEvent = this.handleSearchEvent.bind(this);
		this.handleChangeEvent = this.handleChangeEvent.bind(this);
	}
	// assign value to state to handle change events
	handleChangeEvent(event) {
		event.preventDefault();
		this.setState({bookInput: event.target.value});
	}
	// assign values to search event
	handleSearchEvent(event) {
		event.preventDefault();
		API.searchBooks(this.state.bookInput).then((result) => {
			this.setState({bookData : result.data});
			this.setState({bookInput: ""});
		});
	}
	// render results container according to search results
	render() {
		return (
			<main>
			<SearchForm handleChangeEvent = {this.handleChangeEvent} handleSearchEvent = {this.handleSearchEvent} />
			{(this.state.bookData.length > 0) ? <ResultsContainer bookData = {this.state.bookData} path = {this.props.match.path} /> :null}
			</main>
			);
	}
}

export default Search;