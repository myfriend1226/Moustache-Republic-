import React, { Component } from "react";
import {Form} from "react-bootstrap";
export default class Size extends Component {
    this.state{
        size:""
    }
    updateSize(e)={
        this.setState({
            size:e.target.value
        })
    }
  render() {
     let { 
        size,
        number,
        }=this.props;
    return (
      <div className="mt-4">
        <p style={{color: "#888888"}}>
          SIZE<span style={{ color: "red" }}>*</span>
        </p>
        <div className="btn-toolbar">
            <div className="btn-group mr-2" role="group" aria-label="First group">
            <button value='S' onClick={this.updateSize} type="button" className="btn btn-outline-secondary mr-2 " style={{borderRadius:0, width:40}}>S</button>
            <button value='M' onClick={this.updateSize} type="button" className="btn btn-outline-secondary mr-2" style={{borderRadius:0, width:40}}>M</button>
            <button value='L' onClick={this.updateSize} type="button" className="btn btn-outline-secondary mr-2" style={{borderRadius:0, width:40}}>L</button>
            </div>  
        </div>
        <button onClick={()=>{number+=1}} style={{borderRadius:0, borderWidth:"2.5px", fontWeight:"bold"}} className='btn btn-outline-dark mt-4'>ADD TO CART</button>
      </div>
    );
  }
}
