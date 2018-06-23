import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";


class SavedArticles extends Component {
  state= {
    savedArticles: []
  }

  componentDidMount() {
    API.getSavedArticles(this.props.match.params)
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
        <List>
          {this.state.savedArticles.map(article => {
            return (
              <ListItem key={article._id}>
                <a href={article.web_url}>{article.headline.main}</a> Published On: {article.pub_date}
              </ListItem>
            )
          })}
        </List>
        </Row>
      </Container>
    )
  }
};

export default SavedArticles;
