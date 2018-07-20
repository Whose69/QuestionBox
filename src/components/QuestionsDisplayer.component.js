import React from 'react';

export class QuestionsDisplayer extends React.Component {

  get progressStyle() {
    const step = 100 / this.props.questionsArrayLength;
    const width = (step * (this.props.questionIndex + 1)) + '%';
    return {...{}, width};
  }

  render() {
    return (
    	<div className="question_container">
    		<div className="question_header">
      		<div className = "question title">{this.props.question.title}</div>
    			<div className = "question outof">{this.props.questionIndex + 1 + "/" + this.props.questionsArrayLength}</div>
    		</div>
        <div className="progress-bar">
          <div className="progress" style={this.progressStyle}></div>
        </div>
    		<p className = "question_body">{this.props.question.question}</p>
        </div>
      );
  }
};