import React from 'react'

export class NavigationHandler extends React.Component{
  render() {
  	return (
  		<div className="buttons">
			<button className="backbutton" onClick={this.props.onClickBack}>back</button>
			<button className="nextbutton" onClick={this.props.onClickNext}>next</button>
		</div>
  		);
  };
};