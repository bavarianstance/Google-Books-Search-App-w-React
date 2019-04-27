import React from "react"
import API from "../utils/API";
import {BrowserRouter as Router} from "react-router-dom";

class BookResults extends React.Component {
	constructor(props) {
		super(props);
		this.state {
			saved:false,
			deleted:false
		}
		this.handleSaveEvent = this.handleSaveEvent.bind(this);
		this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
	}

	handleSaveEvent = function(event) {
		this.setState({saved:true});
		const data = {
			title: this.props.title,
			authors: this.props.authors,
			link: this.props.link,
			image: this.props.image,
			description: this.props.description
		}
		event.preventDefault();
		API.saveBook(data).then((result) => {
			console.log(result);
		}).catch((err) => {
			console.log(err);
		});
	}	

	handleDeleteEvent = function(event) {
		this.setState({deleted:true});
		event.preventDefault();
		API.deleteBook(this.props.id).then((result) => {
			console.log(result);
			Router.dispatch(this.props.location, null)
		}).catch((err) => {
			console.log(err);
		});
	}

	render() {
		return (
			<div className="bookResults" id={(this.props.id) ? this.props.id: null} stlye={(display: this.state.deleted ? "none" : "block")}>
			  <div className="row">
			  	<h4>{this.props.title}</h4>
			  	<p>Author(s): {(this.props.authors) ? this.props.authors.join(", "): "N/A"}</p>
			  </div>
			<div className="divButton">
			{
				(this.props.link) ? <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button type="button" name="info">More Info</button></a> : null
			}
			{
				(this.props.path === "/") ? <button type="button" name="save" onClick={this.handleSaveEvent} disabled={(this.state.saved) ? "Saved : Save"} </button> : <button type="button" name="Remove" onClick={this.handleDeleteEvent} disabled={this.state.deleted}>Remove</button>
			}  
		    </div>
		  </div>
		  <div className="row">
		  	{(this.props.image) ? <img src= {
		  		(this.props.image.smallThumbnail) ? this.props.image.smallThumbnail :
		  		(this.props.image.thumbnail) ? this.props.image.thumbnail : ""
		  	} alt="cover"/> : null}
		  	<p>{(this.props.description) ? this.props.description: "N/A"}</p>
		  </div>
		</div>    	
	  );
	}
}

export default BookResults;
