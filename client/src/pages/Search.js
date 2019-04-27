import React from "react";
import SearchForm from "../components/SearchForm";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bookInput: "",
			bookData: []
		}
		this.handleSearchEvent = this.handleSearchEvent.bind(this);
		this.handleChangeEvent = this.handleChangeEvent.bind(this);
	}

	handleChangeEvent(event) {
		event.preventDefault();
		this.setState({bookInput: event.target.value});
	}

	handleSearchEvent(event) {
		event.preventDefault();
		API.searchBooks(this.state.bookInput).then((result) => {
			this.setState({bookData : result.data});
			this.setState({bookInput: ""});
		});
	}

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