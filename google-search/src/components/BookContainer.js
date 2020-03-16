import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import BookDetail from "./BookDetail";
import API from "../utils/API";

class BookContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchBooks("The Matrix");
  }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {

    const movieDetail = this.state.result.items ? (
      <BookDetail
        title={this.state.result.items[0].volumeInfo.title}
        src={this.state.result.items[0].selflink}
        author={this.state.result.items[0].volumeInfo.authors[0]}
      />
    ) : (
      <h3>No Results to Display</h3>
    )

    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Book to Begin"}
            >
              {movieDetail}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookContainer;
