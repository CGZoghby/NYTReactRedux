import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

class SearchResultContainer extends Component {
  state = {
      topic: "",
      startYear: "",
      endYear: "",
      articles: []
    };

  searchNYT = query => {
    API.searchArticles(query)
      .then(res => this.setState({ articles: res.data.response.docs }))
      //.then(res => console.log(res.data.response.docs))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchNYT("&q=" + this.state.topic);
  };

  render() {
    return (
      <div>
        <SearchForm
          topic={this.state.topic}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <List>
          {this.state.articles.map(article => {
            return (
              <ListItem key={article._id}>
                <a href={article.web_url}>{article.headline.main}</a> Published On:{article.pub_date}
              </ListItem>
            )
          })}
        </List>
      </div>
    );
  }
}

export default SearchResultContainer;
