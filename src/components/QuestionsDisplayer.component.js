import React from 'react';

export class QuestionsDisplayer extends React.Component {

  render() {
    return (
    	<div>
    		<div className="question header">
      		<p className = "question title">{this.props.question.title}</p>
    			<p className = "question outof">{this.props.questionIndex + 1 + "/" + this.props.questionsArrayLength}</p>
    		</div>
    		<p className = "question_body">{this.props.question.question}</p>
        </div>
      );
  }
};