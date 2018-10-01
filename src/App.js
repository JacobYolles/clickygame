import React, { Component } from 'react';
import ShowCard from "./components/ShowCard";
import Title from "./components/Title"
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import Wrapper from "./components/Wrapper";
import shows from "./shows.json";
import './App.css';

class App extends Component {

  // create my apps state
  state = {
    shows,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: [],
  };

// Create all my handles. 




// Create my renderizing.
  render() {
    return (
<Wrapper>
      <Title>
        Click on an image to earn points, but don't click on one more than once!
      </Title>
      <Container>
        <Row>
          {this.state.shows.map(show => (
            <Column size="md-3 sm-6">
              <ShowCard
                key = {show.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
                title={show.title}
                id={show.id}
                image={show.image}
            />
            </Column>
          ))}
        </Row>
      </Container>
      </Wrapper>
    );
  }
}

export default App;
