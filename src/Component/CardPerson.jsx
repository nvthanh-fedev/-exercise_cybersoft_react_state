import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export default class CardPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      diffIsActive: false,
    };
  }

  render() {
    const { image, title, content, imageGlasses } = this.props;
    return (
      <Card style={{ width: "25.5rem", border: "1px solid" }}>
        <div style={{ position: "relative" }}>
          <img
            alt="Sample"
            src={image}
            style={{
              position: "relative",
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
              width: "100%",
              borderRadius: "5px",
            }}
          />
          <img
            alt="Sample"
            src={imageGlasses}
            style={{
              position: "absolute",
              top: "235px",
              left: "65px",
              width: "67%",
            }}
          />
        </div>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{content}</CardText>
        </CardBody>
      </Card>
    );
  }
}
