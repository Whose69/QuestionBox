import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QuestionsContainer } from './QuestionsContainer';

class App extends React.Component {
    render() {
        return ( <div>
            <h1>
            <p className="title">{this.props.title}</p>
            <p className="outof">{this.props.outof}</p>
            <h2 className="questionbody">{this.props.question}</h2>
            <AnswersDisplayer possibleAnswers={this.props.answers} />
            </h1>
        </div>
        );
    }
}


export default App;