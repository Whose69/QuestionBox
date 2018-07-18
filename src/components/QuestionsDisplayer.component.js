import React from 'react';

export class QuestionsDisplayer extends React.Component {
  render() {
    return (<div>
      <p className = "answertitle">{this.props.title}</p>
    <p className = "outof">{this.props.index + "/" + this.props.arrayLength}</p>
      </div>
      );
  }
};