import React, { Component } from "react";
import { Button } from "reactstrap";

export default class ButtonGlasses extends Component {
  render() {
    const { prod, active, onClick } = this.props;
    return (
      <Button outline active={active} onClick={onClick}>
        <img
          className="card-img-top p-2 m-1"
          src={prod.url}
          alt="Card image cap"
          style={{ width: "100%" }}
        />
      </Button>
    );
  }
}
