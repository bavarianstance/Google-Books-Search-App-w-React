import React from "react";

function SearchForm(props) {
	return (
		<div id="searchContainer">
		  <h3>Find Books</h3>
		  <form id="bookSearch">
		  	<label htmlFor="bookInput" form="bookSearch">Google a Book:</label>
		  	<br></br>
		  	<input type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(event) => props.handleChange(event)} placeholder="Title" required />
		  	<br></br>
		  	<button type="submit" onClick={(event) => props.handleSearchEvent(event)}>Search</button>
		  </form>
	     </div>	  	
		);
}

export default SearchForm;