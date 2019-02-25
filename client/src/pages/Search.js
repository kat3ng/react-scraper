import React, { Component } from "react";
import API from "../utils/API";
import { Container } from '../components/Grid/index';
import SearchForm from '../components/SearchForm/index';
import SearchResults from '../components/SearchResults/index';
import Alert from '../components/Alert/index';
import Hero from '../components/Hero/index';

class Search extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: ""
  };

  componentDidMount() {
    API.getBook()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBook(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div>

        <Hero backgroundImage="https://www.impactteachers.com/wp-content/uploads/2017/11/Books.jpg">
          <h1>Google Search</h1>
          <h2>For Books!</h2>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <Container style={{ minHeight: "80%" }}>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              books={this.state.books}
            />
          </Container>
          <SearchResults results={this.state.results} />
          {/* </Row> */}
          {/* </Col> */}
        </Hero>
      </div>
    );
  }
}

export default Search;
