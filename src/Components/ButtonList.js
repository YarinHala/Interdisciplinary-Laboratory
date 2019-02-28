  import React from "react";

  class ButtonList  extends React.Component {
  	constructor(props) {
      super(props);
      this.state = {
        Democratic:0,
        Republican:0
      }
       this.handleChangeButton = this.handleChangeButton.bind(this);
  	}

     handleChangeButton(num){
      this.props.handleChangeButtonClick(num);
    }

    render(){
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) =>
      <button type="button"  className="button" onClick={() => this.handleChangeButton(number)}  key={number.toString()}>
        {number}
      </button>
    );

    return (
	    <div className="buttonList" >{listItems}</div>
    );
  }
}

export default ButtonList;
