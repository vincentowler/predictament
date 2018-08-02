import React, { Component } from "react";
import { CoinStackBar } from "../utils/coinstackBar";

class CoinStack extends Component {
  coins = 0;
  coinStack = null;

  componentWillReceiveProps(nextProps) {
    if (nextProps.coins !== this.coins) {
      this.coinStack.setValue(nextProps.coins);
    }
  }

  componentDidMount() {
    this.coinStack = new CoinStackBar({
      container: document.getElementById("CoinStackBar"),
      coinimgsrc: document.createElement("svg").getAttributeNS
        ? ["bitcoin.svg"]
        : ["bitcoin.png"],
      coinimgwidth: 200,
      coinimgheight: 100,
      coinheight: 30,
      xoffset: 10,
      yoffset: 6,

      startvalue: this.props.coins,
      maxstackheight: 30,
      containerwidth: 50,
      containerheight: 500
    });
  }

  render() {
    return <div id="CoinStackBar" />;
  }
}

export default CoinStack;
