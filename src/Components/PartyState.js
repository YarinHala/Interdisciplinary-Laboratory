  import React from "react";

  class PartyState  extends React.Component {
  	constructor(props) {
      super(props);
      this.state = {
        Democratic:0,
        Republican:0
      }
  	}

    render(){
      return (
  	    <div className="PartyState" >
        <span>
            <img alt="pic" className="genrePic" src={'./Images/'+this.props.Party[1].genre+'.png'}/>
            {this.props.Party[1].genre + " : " + this.props.Party[1].val + "%"}
          </span> 
          <span>
            <img alt="pic" className="emotionPic" src={'./Images/'+this.props.Party[0].emotion+'.png'}/>
            {this.props.Party[0].emotion + " : " + this.props.Party[0].val+ "%"}
          </span>
        </div>
      );
  }
}

export default PartyState;
