import React from 'react';

export class AnswersDisplayer extends React.Component {
  
handleClick(e) {
    this.props.onAnswerSelect(this.props.questionIndex, e);
  }

get answersStyle() {
    const answerSpan = Math.round(100 / this.props.answersToQuestion.length) + '%';
    return {...{}, answerSpan};
  }

render() {
  let answers = [];
  this.props.answersToQuestion.map((answer, i) => {
     answers.push(
        <p 
        className={this.props.selectedAnswers[this.props.questionIndex] === i ? "selected answer": "answer"}
        key={i}
        onClick={this.handleClick.bind(this, i)}
        style={this.answersStyle}
        >{answer}
        </p>
          )
      });
      return <div className="answers_container">{answers}</div>;
    };
};