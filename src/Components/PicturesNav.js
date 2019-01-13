import React, { Component } from 'react';



class PicturesNav extends Component{
 	constructor(props) {
    super(props);
    this.state = {presedentSelected:"George H. W. Bush"};
 	}


render(){
	return(
		<div>
			<span className="imgSpan">
				<img alt="pic" className="img_nav" onClick={() => this.props.handleChange("gop","George H. W. Bush")} src="./Images/George H. W. Bush.jpg"/>
				<img alt="pic" className="img_nav" onClick={() => this.props.handleChange("dpl","Bill Clinton")} src="./Images/Bill Clinton.jpg"/>
				<img alt="pic" className="img_nav" onClick={() => this.props.handleChange("gop","George W. Bush")} src="./Images/George W. Bush.jpg"/>
				<img alt="pic" className="img_nav" onClick={() => this.props.handleChange("dpl","Barack Obama")} src="./Images/Barack Obama.jpg"/>	
				<img alt="pic" className="img_nav" onClick={() => this.props.handleChange("gop","Donald Trump")} src="./Images/Donald Trump.jpg"/>
			</span>
			<h3 id="presedentName">{this.state.presedentSelected.name}George H. W. Bus</h3>
		</div>
		);
	}
}
export default PicturesNav;