import React, { Component } from "react";
import { ButtonGroup, Col } from "reactstrap";
import { listGlasses } from "../assets/data/dataGlasses";
import ButtonGlasses from "./ButtonGlasses";

export default class ListButtonsGlasses extends Component {
  state = {
    activeButtonId: 1,
  };

  handleClick = (id) => {
    console.log(
      "🚀 ~ file: ListButtonsGlasses.jsx:12 ~ ListButtonsGlasses ~ id:",
      id
    );
    this.setState({ activeButtonId: id });
    this.props.onButtonChange(id); // gọi hàm callback để truyền giá trị lên component cha
  };

  renderButtonGlasses = () => {
    const { activeButtonId } = this.state;
    return listGlasses.map((prod) => (
      <ButtonGlasses
        key={prod.id}
        prod={prod}
        active={activeButtonId === prod.id}
        onClick={() => this.handleClick(prod.id)}
      />
    ));
  };

  render() {
    return (
      <Col className="col-2">
        <ButtonGroup vertical>{this.renderButtonGlasses()}</ButtonGroup>
      </Col>
    );
  }
}
