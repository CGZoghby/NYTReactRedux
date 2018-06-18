import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import SaveBtn from "../../components/SaveBtn";

class Results extends Component {
  state = {
    articles: {}
  };
  // When this component mounts, grab the article with the _id of this.props.match.params.id
  // e.g. localhost:3000/articles/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getArticles(this.props.match.params)
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Results
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <List>
              {this.state.articles.map(article => (
                <ListItem key={article.id}>
                <a href={article.link}><strong>{article.title}</strong></a>
                <SaveBtn onClick={() => this.saveArticle(article._id)} />
                </ListItem>
              ))}
            </List>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Articles</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Results;
