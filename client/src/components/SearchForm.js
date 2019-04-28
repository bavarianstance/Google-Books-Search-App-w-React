import React from "react";

// init / render searchform
function SearchForm(props) {
	return (
<div className="container">
<div className="input-group input-group-lg">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-lg">Books</span>
  </div>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={(event) => props.handleChangeEvent(event)} placeholder="Title" required />
  <button type="submit" className="btn btn-info" onClick={(event) => props.handleSearchEvent(event)}>Search</button>
</div>
</div>

		);
}

export default SearchForm;