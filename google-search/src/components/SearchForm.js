import React from "react";

function SearchForm(props) {
  const {
    handleFormSubmit,
    handleInputChange,
    value
  } = props;

  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={handleInputChange}
          value={value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Movie"
          id="search"
        />
        <br />
        <button onClick={handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
