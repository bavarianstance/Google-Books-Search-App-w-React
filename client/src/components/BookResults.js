// import components
import React from "react"
import API from "../utils/API";

// init bookresults constructor function
class BookResults extends React.Component {
	constructor(props) {
		super(props);
		// def default states
		this.state = {
			saved:false,
			deleted:false
		}
		// bind save and delete events
		this.handleSaveEvent = this.handleSaveEvent.bind(this);
		this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
	}

	// def handle save event fcn
	handleSaveEvent = function(event) {
		this.setState({saved:true});
		// assign data to appropriate capture values
		const data = {
			title: this.props.title,
			authors: this.props.authors,
			link: this.props.link,
			image: this.props.image,
			description: this.props.description
		}
		event.preventDefault();
		// init savebook api
		API.saveBook(data).then((result) => {
			console.log(result);
		}).catch((err) => {
			console.log(err);
		});
	}	
	// def handle delete event fcn
	handleDeleteEvent = function(event) {
		// set state to appropriatevalue for deletion
		this.setState({deleted:true});
		event.preventDefault();
		API.deleteBook(this.props.id).then((result) => {
			console.log(result);
		}).catch((err) => {
			console.log(err);
		});
	}
// init main render for results via JSX
	render() {
		return (
			<div className="bookResults container" id={(this.props.id) ? this.props.id: null} style={{display: this.state.deleted ? "none" : "block"}}>
			  <div className="row">
			  	<div className="aboutBook">
			  	<h4>{this.props.title}</h4>
			  	<p>Author(s): {(this.props.authors) ? this.props.authors.join(", "): "N/A"}</p>
			  </div>
			<div className="divButton">
			{
				(this.props.link) ? <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-primary" name="info">More Info</button></a> : null
			}
			{
				(this.props.path === "/")? <button type="button" className="btn btn-success" name="save" onClick={this.handleSaveEvent} disabled={this.state.saved}>{(this.state.saved)? "Saved" : "Save"} </button>: <button type="button" className="btn btn-danger" name="Remove" onClick={this.handleDeleteEvent} disabled={this.state.deleted}>Remove</button>

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
