"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
const container = document.getElementById("div1");

class Calc extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dig1:0,
      dig2:0,
      res:0,
      dig1Valid: false,
      dig2Valid: false
    };
    this.calcsum = this.calcsum.bind(this);
    this.calcodds = this.calcodds.bind(this);
    this.calcmult = this.calcmult.bind(this);
    this.calcdivd = this.calcdivd.bind(this);
    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
  }
  onChange1(event){
    this.setState({
        dig1: event.target.value,
        dig1Valid: this.dig1Valid(event.target.value)
      });
  }
  onChange2(event){
    this.setState({
      dig2: event.target.value,
      dig2Valid: this.dig2Valid(event.target.value)
    });
  }
  dig1Valid(dig1) {
     if ( dig1.length > 0 ) {
        return true;
     }
     return false;
  }
  dig2Valid(dig2) {
     if (dig2.length > 0) {
        return true;
     }
     return false;
  }
  calcsum(){
    this.setState(
        (prevState, props) => ({
           res: Number(this.state.dig1) + Number(this.state.dig2)
        })
     );
  }
  calcodds(){
    this.setState(
        (prevState, props) => ({
           res: Number(this.state.dig1) - Number(this.state.dig2)
        })
     );
  }
  calcmult(){
    this.setState(
        (prevState, props) => ({
           res: Number(this.state.dig1) * Number(this.state.dig2)
        })
     );
  }
  calcdivd(){
    this.setState(
        (prevState, props) => ({
           res: Number(this.state.dig1) / Number(this.state.dig2)
        })
     );
  }
  render() {
    let dig1Color = this.state.dig1Valid === true ? "green" : "red";
    let dig2Color = this.state.dig1Valid === true ? "green" : "red";
    return (
      <div>
        <p><b>Calc</b></p>
        <input type="text" name="dig1" onChange={this.onChange1} value={this.state.dig1} style={{borderColor: dig1Color}} />
        <input type="text" name="dig2" onChange={this.onChange2} value={this.state.dig2} style={{borderColor: dig2Color}} />
        <br></br><br></br>
        <button type="button" onClick={this.calcsum}>+</button>
        <button type="button" onClick={this.calcodds}>-</button>
        <button type="button" onClick={this.calcmult}>*</button>
        <button type="button" onClick={this.calcdivd}>/</button>
        <p><b>RES = {this.state.res}</b></p>
      </div>
    );
  }
}
ReactDOM.render(
  <Calc />,
  container
);
