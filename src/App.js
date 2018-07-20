import React from 'react';
import './App.css';
import {QuestionsDisplayer} from './components/QuestionsDisplayer.component';
import {NavigationHandler} from './components/NavigationHandler.component';
import {AnswersDisplayer} from './components/AnswersDisplayer.component';

const questions = [{
    title: "Main js library",
    question: "What js library was this project built with?",
    answers: ["Angular", "Bootstrap", "React"]
}, {
    title: "Main Highlighting syntax program",
    question: "What Highlighting syntax program does this code was written with?",
    answers: ["Eclipse", "Atom", "Sublime Text", "IntelliJ"]
}, {
    title: "Favorite football team",
    question: "What's your localy favorite football team?",
    answers: ["Hapoel Beersheva", "Maccabi Tel Aviv", "Beitar Jerusalem", "Maccabi Haifa", "Hapoel Tel Aviv"]
}, {
    title: "Favorite ethnic food",
    question: "What is your ethnic favorite cuisine?",
    answers: ["French", "Thai", "Israeli", "Italian"]
}];

export class App extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
        currentQ: 0,
        selectedAnswers: Array(questions.length).fill(null)

     };

    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleAnswerSelection = this.handleAnswerSelection.bind(this);
  }

  handleAnswerSelection(index, val) {
    let selectedAnswersArray = this.state.selectedAnswers;
    selectedAnswersArray[index] = val;
    this.setState({ selectedAnswers: selectedAnswersArray });
  }

  handleClickNext() {
    this.setState({
      currentQ: Math.min(this.state.currentQ + 1, questions.length - 1)
    });
  }

  handleClickBack() {
    this.setState({
      currentQ: Math.max(this.state.currentQ - 1, 0)
    });
  }
    render() {
        return ( 
            <div className="app">
            <QuestionsDisplayer 
                question={questions[this.state.currentQ]}
                questionIndex={this.state.currentQ}
                questionsArrayLength={questions.length}
            />
            <AnswersDisplayer 
                questionIndex={this.state.currentQ}
                answersToQuestion={questions[this.state.currentQ].answers}
                selectedAnswers={this.state.selectedAnswers}
                onAnswerSelect={this.handleAnswerSelection}
            />
            <NavigationHandler 
                 onClickBack={this.handleClickBack}
                 onClickNext={this.handleClickNext}
                 disableBack={this.state.currentQ === 0}
                 disableNext={this.state.currentQ  === (questions.length - 1)}
          />
            </div>
        );
    }
}