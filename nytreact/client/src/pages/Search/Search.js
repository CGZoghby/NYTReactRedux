import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      API.searchArticles({
        topic: this.state.topic,
        startYear: this.state.startYear,
        endYear: this.state.endYear
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search For An Article!</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic"
              />
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="link"
                placeholder="Start Year"
              />
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="date"
                placeholder="End Year"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
