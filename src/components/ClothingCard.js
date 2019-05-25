import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Shirt from "../assets/img/classic-tee.jpg";

export default class ClothingCard extends Component {
  state = {
    listItem: {
      id: 1,
      name: "Classic Tee",
      img: Shirt,
      size: undefined,
      number: 1,
      amount: 75.0
    }
  };

  setSize=(size)=>{
    let {listItem}=this.state;
    listItem.size=size;
    this.setState({listItem});
  }

  handlAddToCart = (e,size) => {
    e.preventDefault();
    let {listItem}=this.state;
    listItem.size=size;
    this.props.stateUpdate({...listItem});
  };

  render() {
    let { size } = this.state.listItem;
    
    return (
      <div className="container">
        <div className="row">
          <div className="offset-md-1 col-sm-12 col-md-5">
            <img
              src={Shirt}
              style={{ height: "90%", width: "85%", marginTop: "20px" }}
            />
          </div>
          <div className="offset-md-1 col-sm-12 col-md-5">
            <Card style={{ borderStyle: "none", textAlign: "left" }}>
              <Card.Body>
                <Card.Title>
                  <h4
                    style={{
                      padding: "10px 0"
                    }}
                  >
                    {this.state.listItem.name}
                  </h4>

                  <h6
                    style={{
                      borderStyle: "solid none",
                      borderColor: " #CCCCCC",
                      borderWidth: "1px",
                      padding: "7px 0"
                    }}
                  >
                    $75.00
                  </h6>
                </Card.Title>
               
                
                  <p className='mt-2' style={{ color: "#888888" }}>
                    Regular fit Crew neck Mid weight, 180 GSM, 28-singles 100%
                    combed cotton (marles 15% viscose) Neck ribbing, side
                    seamed, shoulder to shoulder tape, double needle hems,
                    preshrunk to minimise shrinkage
                  </p>
                 

                  <div className="mt-4">
                    <div style={{ color: "#888888" }}>
                      SIZE<span style={{ color: "red" }}>*</span>
                    </div>
                    <div className="btn-toolbar">
                      <div
                        className="btn-group mr-2"
                        role="group"
                        aria-label="First group"
                      >
                        <button
                          value="S"
                          onClick={()=>this.setSize("S")}
                          type="button"
                          className="btn btn-outline-secondary mr-2 "
                          style={{ borderRadius: 0, width: 40 }}
                        >
                          S
                        </button>
                        <button
                          value="M"
                          onClick={()=>this.setSize("M")}
                          type="button"
                          className="btn btn-outline-secondary mr-2"
                          style={{ borderRadius: 0, width: 40 }}
                        >
                          M
                        </button>
                        <button
                          value="L"
                          onClick={()=>this.setSize("L")}
                          type="button"
                          className="btn btn-outline-secondary mr-2"
                          style={{ borderRadius: 0, width: 40 }}
                        >
                          L
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={(e)=>this.handlAddToCart(e,size)}
                      style={{
                        borderRadius: 0,
                        borderWidth: "2.5px",
                        fontWeight: "bold"
                      }}
                      className="btn btn-outline-dark mt-4"
                      disabled={size===undefined}
                    >
                      ADD TO CART
                    </button>
                  </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
