import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
        search: "",
        breeds: [],
        results: [],
        error: ""
    };

    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
        API.getBaseBreedsList()
            .then(res => this.setState({ breeds: res.data.message }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };


    render() {
        return (
            <div>
                <Container style={{ minHeight: "80%" }}>


                    <SearchResults results={this.state.results} />
                </Container>
            </div>
        );
    }
}

export default Search;
