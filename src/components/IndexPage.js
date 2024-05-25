import React from "react";
import { withRouter } from "react-router-dom";
import gcImage from "../images/gcube.jpg";
import n64Image from "../images/n64.jpg";
import nswImage from "../images/nswitch.png";
import ps4Image from "../images/playstation4.jpg";
import snesImage from "../images/snes.webp";
import xbxImage from "../images/xboxone.png";

import Card from "./Card";

function IndexPage() {
  return (
    <div className="Cards">
      <h2>Video Game Store</h2>
      <div className="Card-Flex-Box">
        <div className="CardGroup">
          <Card
            title="Game Cube"
            text="Click to order"
            image={gcImage}
            price="$39"
          />
          <Card
            title="Nintendo 64"
            text="Click to order"
            image={n64Image}
            price="$29"
          />
          <Card
            title="Nintendo Switch"
            text="Click to order"
            image={nswImage}
            price="$49"
          />
          <Card
            title="Play Station 4"
            text="Click to order"
            image={ps4Image}
            price="$59"
          />
          <Card
            title="Super Nintendo"
            text="Click to order"
            image={snesImage}
            price="$19"
          />
          <Card
            title="Xbox One"
            text="Click to order"
            image={xbxImage}
            price="$79"
          />
        </div>
      </div>
    </div>
  );
}

export default withRouter(IndexPage);
