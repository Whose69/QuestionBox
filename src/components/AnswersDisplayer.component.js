import React from 'react';

export class AnswersDisplayer extends React.Component {
  
handleClick(e) {
    this.props.onAnswerSelect(this.props.questionIndex, e);
  }

render() {
  let answers = [];
  this.props.answersToQuestion.map((answer, i) => {
     answers.push(
        <p 
        className={this.props.selectedAnswers[this.props.questionIndex] === i ? "selected answer": "answer"}
        id={i}
        onClick={this.handleClick.bind(this, i)}
        >{answer}
        </p>
          )
      });
      return <div className="answers">{answers}</div>;
    };
};