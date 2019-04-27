import React from "react";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";

class Saved extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			savedBooks: []
		}
	}

	componentWillMount() {
		API.getBooks().then((result) => {
			this.setState({savedBooks : result.data});
		}).catch((error) => {
			console.log(error);
		});
	}

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