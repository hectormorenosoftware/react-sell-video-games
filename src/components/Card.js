import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { addOrderType } from "../redux/actions/ordersActions";
import "./Card.css";

function Card(props) {
  const { image, title, price, history, text, style } = props;
  const dispatch = useDispatch();

  const routeToScheduler = () => {
    history.push("/scheduler");

    dispatch(
      addOrderType({
        phoneNumber: "",
        address: "",
        email: "",
        price,
        image,
        title,
        text: "Click this image once you are done entering your first name, last name, phone number, address, and email to order your console.",
      })
    );
  };

  return (
    <div className="Card" onClick={routeToScheduler}>
      <img src={image} alt={title} style={style} />
      <h3>{title}</h3>
      <h3>{price}</h3>
      <h3 className="card-text-alignment">{text}</h3>
    </div>
  );
}

export default withRouter(Card);
