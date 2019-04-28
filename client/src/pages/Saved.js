// import components
import React from "react";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";
// init constructor function for saved books
class Saved extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			savedBooks: []
		}
	}
// after mounting, init work to save books to appropriate state and API
	componentWillMount() {
		API.getBooks().then((result) => {
			this.setState({savedBooks : result.data});
		}).catch((error) => {
			console.log(error);
		});
	}
// render saved books to results container
	render() {
		console.log(this.state.savedBooks);
		return (
			<main>
				<ResultsContainer savedBooks = {this.state.savedBooks} path={this.props.match.path} />
			</main>	
			);
	}
}

export default Saved;