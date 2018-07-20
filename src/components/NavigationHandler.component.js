import React from 'react'

export class NavigationHandler extends React.Component{
  render() {
  	return (
  		<div className="navigation_buttons">
			<button className="back button" onClick={this.props.onClickBack} disabled={this.props.disableBack}>Back</button>
			<button className="next button" onClick={this.props.onClickNext} disabled={this.props.disableNext}>Next</button>
		</div>
  		);
  };
};