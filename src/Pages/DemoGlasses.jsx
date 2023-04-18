import React, { Component } from "react";
import ListButtonsGlasses from "../Component/ListButtonsGlasses";
import CardPerson from "../Component/CardPerson";

import { listGlasses } from "../assets/data/dataGlasses";

export default class DemoGlasses extends Component {
  constructor(props) {
    super(props);
    const defaultGlasses = listGlasses[0]; // Lấy thông tin của glasses đầu tiên trong listGlasses
    this.state = {
      cardPersonId: 0,
      idGlasses: 1,
      nameGlasses: defaultGlasses.name, // Thiết lập giá trị mặc định cho nameGlasses là name của glasses đầu tiên
      descGlasses: defaultGlasses.desc,
    };
  }

  handleButtonChange = (id) => {
    console.log("Demo Glasses id glasses is ", id);
    const glasses = listGlasses.find((g) => g.id === id);
    this.setState({
      idGlasses: id,
      nameGlasses: glasses.name,
      descGlasses: glasses.desc,
    });
  };

  render() {
    const { cardPersonId, idGlasses, nameGlasses, descGlasses } = this.state;
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-4">
            <div className="row">
              <div className="col-12">
                <CardPerson
                  id={`${cardPersonId}`}
                  image="src/assets/images/glassesImage/model.jpg"
                  title={nameGlasses} // sử dụng giá trị nameGlasses từ state
                  content={descGlasses} // sử dụng giá trị descGlasses từ state
                  imageGlasses={`src/assets/images/glassesImage/v${idGlasses}.png`} // sử dụng giá trị id từ state
                  idGlasses="1"
                />
              </div>
            </div>
          </div>
          <ListButtonsGlasses onButtonChange={this.handleButtonChange} />{" "}
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}
