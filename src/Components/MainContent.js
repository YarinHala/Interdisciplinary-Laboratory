import React, { Component } from 'react';
import ReactPageScroller from "react-page-scroller";
import ChartsPage from "./ChartsPage.js"
import PicturesNav from "./PicturesNav.js"
import HomeSection from "./HomeSection.js"
import ChartsPageTwo from "./ChartsPageTwo.js"


//import ReactDOM from 'react-dom';

class Fullpage extends Component{ 
 	constructor(props) {
    super(props);
    this.state = {president:"George H. W. Bush",}
    this.handleChange = this.handleChange.bind(this);
    this.child = React.createRef();
 	}

	handleChange(bgColor,presedentName){
		document.getElementById('presedentName').innerHTML = presedentName;
  		if(bgColor === "gop"){
  			 document.getElementById('presedentSction').style.backgroundImage = "url('./Images/r_bg.png')";
  			 document.getElementById('img_flag_dpl').style.opacity = 0;
  			 document.getElementById('img_flag_gop').style.opacity = 1;

  		
  		}else{
  			 document.getElementById('presedentSction').style.backgroundImage = "url('./Images/d_bg.png')";
  			 document.getElementById('img_flag_dpl').style.opacity = 1;
  			 document.getElementById('img_flag_gop').style.opacity = 0;
  		}

  		if(presedentName === "George H. W. Bush"){
  			 document.getElementById('presedentName').style.left = "10%";
		}
		if(presedentName === "Bill Clinton"){
  			 document.getElementById('presedentName').style.left = "30%";
		}
		if(presedentName === "George W. Bush"){
  			 document.getElementById('presedentName').style.left = "44%";
		}
		if(presedentName === "Barack Obama"){
  			 document.getElementById('presedentName').style.left = "60%";
		}
		if(presedentName === "Donald Trump"){
  			 document.getElementById('presedentName').style.left = "77%";
		}


  		this.state.president = presedentName;
		this.setState({president:presedentName});
		this.child.current.presidentChanged(presedentName);
	}



    render(){
      return (
        <ReactPageScroller ref={(c) =>{this.reactPageScroller = c
         }}>
        <section>
 			<h1>The Presidency Influence On music trands</h1>
 			<HomeSection/>
         </section>
        <section id="presedentSction">
        	<h2>Top 3 Song Genre Of Every Year</h2>
        	<PicturesNav  handleChange={this.handleChange} />
	 		<ChartsPage ref={this.child}/>
         </section>
        <section>
 			<h2>The Presidency Influence On Music Trands Immotion</h2>
        	<PicturesNav handleChange={this.handleChange}/>
        	<img alt="pic" className="chart1" src="./Images/chart1.png"/>
        	<img alt="pic" className="chart2" src="./Images/chart1.png"/>
         </section>
         <section>
 			<h2>The Presidency Influence On Genre trands By Motion!</h2>
        	<PicturesNav handleChange={this.handleChange}/>
        	<img alt="pic" className="chart3" src="./Images/chart2.png"/>
         </section>
       </ReactPageScroller>
      );

    }
  
}


export default Fullpage;



 
const presedentYears = [
        {
        name:"George H. W. Bush",
        side:"Republican",
        years:[1989,1990,1991,1992]
        },
        {
        name:"Bill Clinton",
        side:"Democratic",
        years:[1993,1990,1994,1995,1996,1997,1998,1999,2000]
        },
        {
        name:"George W. Bush",
        side:"Republican",
        years:[2001,2002,2003,2004,2005,2006,2007,2008,2009]
        },
        {
        name:"Barack Obama",
        side:"Democratic",
        years:[2009,2010,2011,2011,2012,2013,2014,2015,2016 ]
        },
        {
        name:"Donald Trump",
        side:"Republican",
        years:[2017,2018]
        }
      ]
    

