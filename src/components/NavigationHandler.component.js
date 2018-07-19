import React from 'react'

export class NavigationHandler extends React.Component{
  render() {
  	return (
  		<div className="buttons">
			<button className="backbutton" onClick={this.props.onClickBack} disabled={this.props.disableBack}>back</button>
			<button className="nextbutton" onClick={this.props.onClickNext} disabled={this.props.disablenext}>next</button>
		</div>
  		);
  };
};