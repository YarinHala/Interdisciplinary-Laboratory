import React from "react";
import ButtonList from "./ButtonList.js"
import PartyState from "./PartyState.js"


  class PageByYears extends React.Component{
      constructor(props) {
      super(props);
      this.state = {
        DemocraticYears:BillClinton,
        RepublicanYears:GeorgeHWBus,
        RepublicanState:[
                          {
                          emotion:"",
                          val:""
                          },
                          {
                          genre:"",
                          val:"" 
                          }
                        ],
        DemocraticState:[
                          {
                          emotion:"",
                          val:""
                          },
                          {
                          genre:"",
                          val:"" 
                          }
                        ]
      }
       this.handleChange = this.handleChange.bind(this);
       this.handleChangeButtonClick = this.handleChangeButtonClick.bind(this);
    }

   
     componentWillMount() {

       fetch('https://data-visualization-service.herokuapp.com/statsForYear/1989')
        .then((Response)=>Response.json())
        .then((req)=>{
                this.setState({
                  RepublicanState:[
                          {
                          emotion:req[0].name,
                          val:req[0].val
                          },
                          {
                          genre:req[1].name,
                          val:req[1].val
                          }
                        ]

                });
          });

       fetch('https://data-visualization-service.herokuapp.com/statsForYear/1993')
        .then((Response)=>Response.json())
        .then((req)=>{
                this.setState({
                  DemocraticState:[
                          {
                          emotion:req[0].name,
                          val:req[0].val
                          },
                          {
                          genre:req[1].name,
                          val:req[1].val
                          }
                        ]
                });
          });
    }


    handleChange(presedentName,dep){
      var Republican = ["GeorgeHWBus","GeorgeWBush","DonaldTrump"];
      var Democratic = ["BillClinton","BarackObama"];
      var currentArray = [];

      const GeorgeHWBus = [1989,1990,1991,1992];
      const BillClinton = [1993,1994,1995,1996,1997,1998,1999,2000];
      const GeorgeWBush = [2001,2002,2003,2004,2005,2006,2007,2008];
      const BarackObama = [2009,2010,2011,2012,2013,2014,2015,2016];
      const DonaldTrump = [2017,2018];

      if(presedentName === "GeorgeHWBus"){
        currentArray = GeorgeHWBus;
      } 
      if(presedentName === "BillClinton"){
        currentArray = BillClinton;
      }
      if(presedentName === "GeorgeWBush"){
         currentArray = GeorgeWBush;
      }
      if(presedentName === "BarackObama"){
          currentArray = BarackObama;
      }
      if(presedentName === "DonaldTrump"){
          currentArray = DonaldTrump;
      }

      if(dep === "gop")
        for (var i = 10 ; i < 13; i++) {
        
            if(Republican[i-10] === presedentName){
                document.getElementsByClassName("img_nav")[i].style.opacity = 1; 
                this.setState({RepublicanYears:currentArray})
            }else{
              document.getElementsByClassName("img_nav")[i].style.opacity = 0.5; 
            } 

        }

      if(dep === "dpl")
        for (var i = 13 ; i < 15 ;i++) {
        
            if(Democratic[i-13] === presedentName){
                document.getElementsByClassName("img_nav")[i].style.opacity = 1;
                this.setState({DemocraticYears:currentArray})
            }else{
              document.getElementsByClassName("img_nav")[i].style.opacity = 0.5; 
            } 

        }
    }

    handleChangeButtonClick(num){
                        console.log(num);


       fetch('https://data-visualization-service.herokuapp.com/statsForYear/'+ num)
        .then((Response)=>Response.json())
        .then((req)=>{

            var arrayR = [1989,1990,1991,1992,2001,2002,2003,2004,2005,2006,2007,2008,2017,2018]
            var arrayD = [1993,1994,1995,1996,1997,1998,1999,2000,2009,2010,2011,2012,2013,2014,2015,2016]

          
            for (var i = 0 ; i < 14; i++) {
            
              if(arrayR[i] === num){
                //this.state.RepublicanState[0].emotion = req[0].name;
                //this.state.RepublicanState[0].val = req[0].val;
                this.setState({
                  RepublicanState:[
                          {
                          emotion:req[0].name,
                          val:req[0].val
                          },
                          {
                          genre:req[1].name,
                          val:req[1].val
                          }
                        ]

                });
              }
          }
            for (var i = 0 ; i < 16; i++) {
          
              if(arrayD[i] === num){
                
                this.setState({
                  DemocraticState:[
                          {
                          emotion:req[0].name,
                          val:req[0].val
                          },
                          {
                          genre:req[1].name,
                          val:req[1].val
                          }
                        ]

                });
              }
          }

    
          });
    }

  render() {
      return (
        <div id="pageCompare">
        <div id="nav3">
          <span>
            <img alt="flag"  className="gop" src="./Images/gop.png"/>
            <p>Republican</p>
          </span>
          <span className="navRepublican">
            <img alt="pic" className="img_nav" onClick={() => this.handleChange("GeorgeHWBus","gop")} src="./Images/George H. W. Bush.jpg"/>
            <img alt="pic" className="img_nav"style={{opacity:0.5}} onClick={() => this.handleChange("GeorgeWBush","gop")} src="./Images/George W. Bush.jpg"/>
            <img alt="pic" className="img_nav"style={{opacity:0.5}} onClick={() => this.handleChange("DonaldTrump","gop")} src="./Images/Donald Trump.jpg"/>
          </span>
        </div>
        <div id="navYearR">
           <ButtonList numbers={this.state.RepublicanYears} handleChangeButtonClick={this.handleChangeButtonClick.bind(this)}/>
        </div>
        <div id="compare">  
          <PartyState Party={this.state.RepublicanState} />
          <PartyState Party={this.state.DemocraticState} />
        </div>
        <div id="navYearD">
          <ButtonList numbers={this.state.DemocraticYears} handleChangeButtonClick={this.handleChangeButtonClick.bind(this)}/>
        </div>
        <div id="nav4">
        <span >
          <img alt="flag" className="dpl"  src="./Images/dpl.png"/>
          <p>Democratic</p>
        </span>
        <span className="navDemocratic">
          <img alt="pic" className="img_nav"  onClick={() => this.handleChange("BillClinton","dpl")} src="./Images/Bill Clinton.jpg"/>
          <img alt="pic" className="img_nav" style={{opacity:0.5}} onClick={() => this.handleChange("BarackObama","dpl")} src="./Images/Barack Obama.jpg"/>  
      </span>
        </div>
        </div>
      );
    }

  }

  export default PageByYears;

  const GeorgeHWBus = [1989,1990,1991,1992];
  const BillClinton = [1993,1994,1995,1996,1997,1998,1999,2000];
  const GeorgeWBush = [2001,2002,2003,2004,2005,2006,2007,2008];
  const BarackObama = [2009,2010,2011,2012,2013,2014,2015,2016];
  const DonaldTrump = [2017,2018];




