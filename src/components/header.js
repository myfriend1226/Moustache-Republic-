import React, { Component } from "react";
import { NavDropdown,Navbar,Nav, Row, Col } from "react-bootstrap";
import "../assets/nav.css";
export default class Header extends Component {

 
  handleDropdownToggle = event => {
 
    try {
      if (event) {
        event.preventDefault();
        event.stopPropogation();
      }
    } catch (e) {
      return;
    }
  };

 
  render() {
    let itemDisplay = item => {
      return (
        <NavDropdown.Item style={{ width: "300px" }} href="#action/3.1" >
          <Row style={{ height: "20%", width: "30%", display: "inline" }}>
            <Col>
              <img
                src={item.img}
                style={{
                  height: 90,
                  width: 100,
                  float: "left",
                  marginRight: 20
                }}
                alt="Item"
              />
            </Col>
            <Col>
              {item.name}
              <br />
              {item.number} x{" "}
              <span style={{ fontWeight: "bold" }}>
                ${parseFloat(Math.round(item.amount * 100) / 100).toFixed(2)}
              </span>
              <br />
              Size:{item.size} <br />
            </Col>
          </Row>
        </NavDropdown.Item>
      );
    };

    return (
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#F6F6F7",
          justifyContent: "right",
          marginTop: "20px",
          marginBottom: "20px",
          color: "black"
        }}
      >
        <Navbar  right style={{ width: "90%" }}>
        <Nav className="ml-auto">
          <NavDropdown
            style={{ color: "#888888" }}
            title={"My Cart (" + this.props.total + ")"}
            alignRight={true}
            onClick={this.handleDropdownToggle}
          >
            {this.props.listItem && this.props.listItem.length > 0
              ? this.props.listItem.map(item => itemDisplay(item))
              :  <NavDropdown.Item style={{ width: "300px", textAlign:"center" }} >
              <p >The cart is empty !!</p>
              </NavDropdown.Item>}
          </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
