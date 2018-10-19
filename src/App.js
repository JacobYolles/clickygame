import React, { Component } from 'react';
import ShowCard from "./components/ShowCard";
import Title from "./components/Title"
import Nav from "./components/Nav";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import Wrapper from "./components/Wrapper";
import shows from "./shows.json";

// Create my random shuffling of cards.
function randomShows(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Create my app overall
class App extends Component {

  // create my apps state
  state = {
    shows: shows,
    currentScore: 0,
    topScore: 0,
    maximumScore: 12,
    correctIncorrect: "",
    // winningResponse: "",
    clicked: [],
  };

// Create all my handles. 

// Handle the click function 
handleClick = id => {
  if (this.state.clicked.indexOf(id) === -1) {
    this.handleIncrement();
    this.setState({ clicked: this.state.clicked.concat(id) });
  } else {
    this.handleReset();
  }
};

// Handle the incrementation of score and of clicking upon icons.
handleIncrement = () => {
  const newScore = this.state.currentScore + 1;
  const finalScore = this.state.maximumScore;
  this.setState({
    currentScore: newScore,
    correctIncorrect: "You guessed correctly!",
    winningResponse: "",
  });
  if (newScore >= this.state.topScore) {
    this.setState({ topScore: newScore });
  }
  else if (newScore === finalScore) {
    this.setState({ correctIncorrect: "You win!" });
    // this.setState({ winningResponse: "You win!" });
    this.handleWin();
 
  }
  // this.handleShuffle();
};

//Handle the reset of my random show cards positions.
handleReset = () => {
  this.setState({
    currentScore: 0,
    maximumScore: 12,
    topScore: this.state.topScore,
    correctIncorrect: "You guessed incorrectly!",
    clicked: []
  });
  this.handleShuffle();
};

handleWin = () => {
  if (this.state.currentScore === 12) {
    this.setState({ correctIncorrect: "You win!" });
    this.setState({ winningResponse: "You Win!"})
  }
}

// Handle the shuffling of my random show cards.
handleShuffle = () => {
  let shuffledShows = randomShows(shows);
  this.setState({ shows: shuffledShows });
};


// Create my renderizing.
  render() {
    return (
<Wrapper>
  <Nav
  title="React Show Clicky Game" 
  score={this.state.currentScore}
  topScore={this.state.topScore}
  maximumScore={this.state.maximumScore}
  correctIncorrect={this.state.correctIncorrect}
  winningResponse={this.state.winningResponse}
  />
      <Title>
        Click on an image to earn a point, but don't click on any more than once!
        </Title>
        <Title
        handleWin= {this.handleWin}
      />
      <Container>
        <Row>
          {this.state.shows.map(show => (
            <Column size="md-3 sm-6">
              <ShowCard
                key = {show.id}
                handleWin={this.handleWin}
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
} // end the state of the app.

export default App;
