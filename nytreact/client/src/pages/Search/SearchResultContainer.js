import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import SaveBtn from "../../components/SaveBtn";
import DeleteBtn from "../../components/DeleteBtn";

class SearchResultContainer extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
    savedArticles: [],
    title: "",
    link: "",
    pub_date: "",
  };

  componentDidMount() {
    this.getArticles();
  }

  deleteArticle = (id) => {
    API.deleteArticle(id)
      .then(res => this.getArticles())
      .catch(err => console.log(err));
  }

  getArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ savedArticles: res.data })
      )
      .catch(err => console.log(err));
  };

  searchNYT = query => {
    API.searchArticles(query)
      .then(res => this.setState({ articles: res.data.response.docs }))
      //.then(res => console.log(res.data.response.docs))
      .catch(err => console.log(err));
  };

  saveArticle = (articleData) => {
    API.saveArticle(articleData)
      .then(res => this.getArticles())
      .catch(err => console.log(err));
  }

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
    if (this.state.topic && this.state.startYear && this.state.endYear) {
      this.searchNYT("&q=" + this.state.topic + "&begin_date=" + this.state.startYear + "&end_date=" + this.state.endYear);
    } else {
      alert("Please fill in all fields before submitting");
    };
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <SearchForm
              topic={this.state.topic}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <List>
              {this.state.articles.map(article => {
                return (
                  <ListItem key={article._id}>
                    <a href={article.web_url}>{article.headline.main}</a>
                    <br/>Published On: {article.pub_date}
                    <SaveBtn onClick={() => this.saveArticle({
                      title: article.headline.main,
                      link: article.web_url,
                      date: article.pub_date
                    })} />
                  </ListItem>
                )
              })}
            </List>
          </div>
          <div className="col-md-6">
            <List>
              {this.state.savedArticles.map(article => {
                return (
                  <ListItem key={article._id}>
                    <a href={article.link}>{article.title}</a>
                    <br/>Published On: {article.date}
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                  </ListItem>
                )
              })}
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResultContainer;
