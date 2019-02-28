import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import PicturesNav from "./PicturesNav.js"

class ChartsPage extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      dataBar:{},
      dataBar2: {
        labels: [1993,1990,1994,1995,1996,1997,1998,1999,2000],
        datasets: []
      },
      barChartOptions: {
        legend: {
        display: true,
            labels: {
                fontSize: 15
            }
          },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
              {
                ticks: {
                fontSize: 20
                 },
                barPercentage: 1.0,
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ],
          yAxes: [
            {
             
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              },
              ticks: {
                fontSize: 20,
                min: 0,
                max: 50,
                callback: function (value) {
                  return value  + '%';
                }
              },
              scaleLabel: {
                  fontSize: 20,
                  display: true,
                  labelString: 'Percentage',
              }
            }
          ]
        }
      }
    }
    this.chart = React.createRef();
    this.presidentChanged = this.presidentChanged.bind(this);
  }

  componentWillMount() {

    fetch('https://data-visualization-service.herokuapp.com/top3Gneres/1989/1992')
    .then((Response)=>Response.json())
    .then((req)=>{
        
              this.setState({
                      dataBar: {
                      labels: [1989,1990,1991,1992],
                      datasets:[
                        {
                          data: req[0].val,
                          label: req[0].name,
                          backgroundColor: "rgba(245, 74, 85, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[1].name,
                          data: req[1].val ,
                          backgroundColor: "rgba(90, 173, 246, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[2].name,
                          data: req[2].val,
                          backgroundColor: "rgba(245, 192, 50, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[3].name,
                          data: req[3].val,
                          backgroundColor: "rgba(90, 246, 119, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[4].name,
                          data: req[4].val,
                          backgroundColor: "rgba(229, 90, 246, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[5].name,
                          data: req[5].val,
                          backgroundColor: "rgba(70, 255, 244, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[6].name,
                          data: req[6].val,
                          backgroundColor: "rgba(255, 99, 176, 0.5)",
                          borderWidth: 1
                        },{
                          label: req[7].name,
                          data: req[7].val,
                          backgroundColor: "rgba(255, 180, 0, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[8].name,
                          data: req[8].val,
                          backgroundColor: "rgba(255, 255, 255, 0.5)",
                          borderWidth: 1
                        },
                        
                        {
                          label: req[9].name,
                          data: req[9].val,
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[10].name,
                          data: req[10].val,
                          backgroundColor: "rgba(0, 211, 169, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[11].name,
                          data: req[11].val,
                          backgroundColor: "rgba(136, 136, 136, 0.5)",
                          borderWidth: 1
                        }
                      ]
                    }
              });
      });
  }
  
  presidentChanged(bgColor,whoHasBeemClicked){
    
    var array  = [];

    if('George H. W. Bush' === whoHasBeemClicked)
      array = [1989,1990,1991,1992]
    if('Bill Clinton' === whoHasBeemClicked)
      array = [1993,1994,1995,1996,1997,1998,1999,2000]
    if('George W. Bush' === whoHasBeemClicked)
      array = [2001,2002,2003,2004,2005,2006,2007,2008]
    if('Barack Obama' === whoHasBeemClicked)
      array = [2009,2010,2011,2012,2013,2014,2015,2016]
    if('Donald Trump' === whoHasBeemClicked)
      array = [2017,2018]

    this.chart.current.handleChangeNav(bgColor,whoHasBeemClicked,0);

   fetch('https://data-visualization-service.herokuapp.com/top3Gneres/'+array[0]+'/'+array[array.length-1])
    .then((Response)=>Response.json())
    .then((req)=>{
        
              this.setState({
                      dataBar: {
                      labels: array,
                      datasets:[
                        {
                          label: req[0].name,
                          data: req[0].val,
                          backgroundColor: "rgba(245, 74, 85, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[1].name,
                          data: req[1].val,
                          backgroundColor: "rgba(90, 173, 246, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[2].name,
                          data: req[2].val,
                          backgroundColor: "rgba(245, 192, 50, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[3].name,
                          data: req[3].val,
                          backgroundColor: "rgba(90, 246, 119, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[4].name,
                          data: req[4].val,
                          backgroundColor: "rgba(229, 90, 246, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[5].name,
                          data: req[5].val,
                          backgroundColor: "rgba(70, 255, 244, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[6].name,
                          data: req[6].val,
                          backgroundColor: "rgba(255, 99, 176, 0.5)",
                          borderWidth: 1
                        },{
                          label: req[7].name,
                          data: req[7].val,
                          backgroundColor: "rgba(255, 180, 0, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[8].name,
                          data: req[8].val,
                          backgroundColor: "rgba(255, 255, 255, 0.5)",
                          borderWidth: 1
                        },
                        
                        {
                          label: req[9].name,
                          data: req[9].val,
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[10].name,
                          data: req[10].val,
                          backgroundColor: "rgba(0, 211, 169, 0.5)",
                          borderWidth: 1
                        },
                        {
                          label: req[11].name,
                          data: req[11].val,
                          backgroundColor: "rgba(136, 136, 136, 0.5)",
                          borderWidth: 1
                        }
                      ]
                    }
              });
      });

  }

  handleChange(bgColor,presedentName){
     this.props.handleChange(bgColor,presedentName);
  }

render() {
    return (
      <div>
      <PicturesNav ref={this.chart} id="nav1" handleChange={this.handleChange.bind(this)} />
      <div id="charts">
      <span className="img_flag_gop">
        <img alt="flag"  className="gop" src="./Images/gop.png"/>
        <p>Republican</p>
      </span>
      <MDBContainer >   
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
      <span className="img_flag_dpl">
        <img alt="flag" className="dpl"  src="./Images/dpl.png"/>
        <p>Democratic</p>
      </span>
      </div>
      </div>
    );
  }
}
export default ChartsPage;