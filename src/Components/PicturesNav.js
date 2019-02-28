import React, { Component } from 'react';

class PicturesNav extends Component{
 	constructor(props) {
    super(props);
    this.state = {presedentSelected:"George H. W. Bush"};
     this.handleChangeNav = this.handleChangeNav.bind(this);
 	}

 	handleChangeNav(bgColor,presedentName,navNumber){
		console.log("nav");
		var x = navNumber;
		var offset = 0;
		
		var presedent = ["George H. W. Bush", "Bill Clinton","George W. Bush","Barack Obama","Donald Trump"];
		if(navNumber == 1){
			offset = 5;
		}
		document.getElementsByClassName("presedentName")[x].innerHTML = presedentName;

		if(bgColor === "gop"){
			document.getElementsByClassName("presedentSction")[x].style.backgroundImage = "url('./Images/r_bg.png')";
			document.getElementsByClassName("img_flag_dpl")[x].style.opacity = 0;
			document.getElementsByClassName("img_flag_gop")[x].style.opacity = 1;


		}else{
			document.getElementsByClassName("presedentSction")[x].style.backgroundImage = "url('./Images/d_bg.png')";
			document.getElementsByClassName("img_flag_dpl")[x].style.opacity = 1;
			document.getElementsByClassName("img_flag_gop")[x].style.opacity = 0;
		}


		
		for (var i = offset ; i < offset + 5 ; i++) {
		
		    if(presedent[i -offset] === presedentName){
		        document.getElementsByClassName("img_nav")[i].style.opacity = 1; 
		    }else{
		    	document.getElementsByClassName("img_nav")[i].style.opacity = 0.5; 
		    }	

		}

		
	    if(presedentName === "George H. W. Bush"){
	        document.getElementsByClassName("presedentName")[x].style.left = "10%"; 
	    }	
	    if(presedentName === "Bill Clinton"){
	         document.getElementsByClassName("presedentName")[x].style.left = "30%";
	    }

	    if(presedentName === "George W. Bush"){
	         document.getElementsByClassName("presedentName")[x].style.left = "44%";
	    }
	    if(presedentName === "Barack Obama"){
	         document.getElementsByClassName("presedentName")[x].style.left = "60%";
	    }
	    if(presedentName === "Donald Trump"){
	         document.getElementsByClassName("presedentName")[x].style.left = "77%";
	    }

	    this.state.presedentSelected = presedentName;
	    this.setState({presedentSelected:presedentName});

 	}

render(){
	return(
		<div>
			<span className="imgSpan">
				<img alt="pic" className="img_nav" onClick={() => this.props.handleChange("gop","George H. W. Bush")} src="./Images/George H. W. Bush.jpg"/>
				<img alt="pic" className="img_nav" style={{opacity:0.5}} onClick={() => this.props.handleChange("dpl","Bill Clinton")} src="./Images/Bill Clinton.jpg"/>
				<img alt="pic" className="img_nav" style={{opacity:0.5}} onClick={() => this.props.handleChange("gop","George W. Bush")} src="./Images/George W. Bush.jpg"/>
				<img alt="pic" className="img_nav" style={{opacity:0.5}} onClick={() => this.props.handleChange("dpl","Barack Obama")} src="./Images/Barack Obama.jpg"/>	
				<img alt="pic" className="img_nav" style={{opacity:0.5}} onClick={() => this.props.handleChange("gop","Donald Trump")} src="./Images/Donald Trump.jpg"/>
			</span>
			<h3 className="presedentName">{this.state.presedentSelected.name}George H. W. Bus</h3>
		</div>
		);
	}
}
export default PicturesNav;