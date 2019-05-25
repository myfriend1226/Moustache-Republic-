import React, { Component } from "react";
import { NavDropdown, Card, Row, Col, Container } from "react-bootstrap";
import Shirt from "../assets/img/classic-tee.jpg";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let itemDisplay=(item) =>{
      return (
        <NavDropdown.Item
              style={{ width: "300px" }}
              href="#action/3.1"
            >
      <Row style={{ height: 100, width: 200, display: "inline" }}>
        <Col>
          <img
            src={item.img}
            style={{ height: 50, width: 100, float: "left", marginRight: 20 }}
          />
        </Col>
        <Col>
          {item.name}
          <br />
          {item.number} x <span style={{fontWeight:"bold"}}>${parseFloat(Math.round(item.amount * 100) / 100).toFixed(2)}</span>
          <br />
          Size:{item.size} <br />
        </Col>
      </Row>
      </NavDropdown.Item>
    )};

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
        <div className="nav justify-content-end " style={{ width: "85%" }}>
          <NavDropdown
            className="nav-link "
            style={{ color: "#888888" }}
            title={"My Cart (" + this.props.total + ")"}
            id="basic-nav-dropdown"
          >
          {this.props.listItem.map(item=> itemDisplay(item))}
            

           
          </NavDropdown>
        </div>
      </div>
    );
  }
}
