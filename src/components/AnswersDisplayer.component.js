import React from 'react';

class Answer extends React.Component{
  render() {
    let className = "answer";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.answers[this.props.index]}
      </div>
    );
  }
};

class AnswersDisplayer extends React.Component {
	let answers = [];
    for (let i = 0; i < this.props.numBoards; i++) {
      answers.push(
        <Answer index={i} />
      );
    }
};

class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentQ: 0 };

    this.handleNextQ = this.handleNextQ.bind(this);
    this.handlePreviousQ = this.handlePreviousQ.bind(this);
  }

  handleNextQ() {
    this.setState({ currentQ: this.state.currentQ += 1 });
  }

  handlePreviousQ() {
    this.setState({ currentQ: this.state.currentQ -= 1 });
  }

  render() {
    return ( <div>
    	<h1>{questions[this.state.currentQ].question}</h1>
    	</div>
    	);
  }
};