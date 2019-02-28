import React, { Component } from 'react';
import ReactPageScroller from "react-page-scroller";
import ChartsPage from "./ChartsPage.js"
import PicturesNav from "./PicturesNav.js"
import HomeSection from "./HomeSection.js"
import ChartsPageTwo from "./ChartsPageTwo.js"
import PageByYears from "./PageByYears.js"

class Fullpage extends Component{ 
 	constructor(props) {
    super(props);
    this.state = {president:"George H. W. Bush",}
    this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
    this.child = React.createRef();
    this.child2 = React.createRef();
 	}

	handleChange(bgColor,presedentName){

		console.log(presedentName + " 1");
  		this.state.president = presedentName;
		this.setState({president:presedentName});
		this.child.current.presidentChanged(bgColor,presedentName);
	}

	handleChange2(bgColor,presedentName){

		console.log(presedentName + " 2");
  		this.state.president = presedentName;
		this.setState({president:presedentName});
		this.child2.current.presidentChanged(bgColor,presedentName);
	}

    render(){
      return (
        <ReactPageScroller ref={(c) =>{this.reactPageScroller = c}}>
        <section>
 			<h1>The Presidency Influence On music trands</h1>
 			<HomeSection/>
         </section>
        <section className="presedentSction">
        	<h2>Top 3 Song Genre Of Every Year</h2>
	 		<ChartsPage ref={this.child} handleChange={this.handleChange}/>
         </section>
        <section className="presedentSction">
 			<h2>The Presidency Influence On Music Trands Immotion</h2>     	
        	<ChartsPageTwo ref={this.child2}  handleChange2={this.handleChange2}/>
         </section>
         <section>
 			<h2>Top Genre and Motion by Year and Presidency Party</h2>
 			<PageByYears/>
         </section>
       </ReactPageScroller>
      );

    }
  
}

export default Fullpage;

