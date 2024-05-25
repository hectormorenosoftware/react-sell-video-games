import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { addOrder } from "../redux/actions/ordersActions";

function Scheduler(props) {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(
    "You need to enter your first name, last name, phone number, address, and email to order a console."
  );
  const [formError, setFormError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const orderType = useSelector((state) => state.ordersReducer.orderType);
  const { text, image, title, price } = orderType;
  const { history } = props;

  const dispatch = useDispatch();

  const routeToRoot = () => {
    history.push("/");
  };
  const confirmOrder = () => {
    const date = new Date();

    if (
      name.length === 0 ||
      lastName.length === 0 ||
      phoneNumber.length === 0 ||
      email.length === 0 ||
      address.length === 0
    ) {
      return setFormError(true);
    }
    dispatch(
      addOrder({
        name,
        lastName,
        id: Math.floor(100000 + Math.random() * 900000),
        time: date.toString(),
        type: title,
        phoneNumber,
        email,
        address,
      })
    );
    history.push("/confirmation-order");
  };

  const setValue = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
      return setError(false);
    }
    if (name === "lastName") {
      setLastName(value);
      return setError(false);
    }
    if (name === "phoneNumber") {
      setPhoneNumber(value);
      return setError(false);
    }
    if (name === "address") {
      setAddress(value);
      return setError(false);
    }
    if (name === "email") {
      setEmail(value);
      return setError;
    }
  };

  return (
    <div>
      <h2>Order your console</h2>
      <div className="flexbox-one">
        <button className="btn-danger" type="button" onClick={routeToRoot}>
          Click to go back
        </button>
      </div>
      <div className="flexbox-two">
        <div className="Card card-display" onClick={confirmOrder}>
          <img src={image} alt={title} className="card-display-width" />
          <h3>{title}</h3>
          <h3>{price}</h3>
          <h3 className="font-display-image">{text}</h3>
        </div>
      </div>
      <div className="flexbox-three">
        <h3 className="order-suit-h3">
          Enter your first name, last name, phone number, address, and email.
        </h3>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="input-style"
          onChange={setValue}
          value={name}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          className="input-style"
          onChange={setValue}
          value={lastName}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Enter your phone number"
          className="input-style"
          onChange={setValue}
          value={phoneNumber}
        />
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          className="input-style"
          onChange={setValue}
          value={address}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          className="input-style"
          onChange={setValue}
          value={email}
        />
        {formError ? <p className="error-message-order-suit">{error}</p> : null}
      </div>
    </div>
  );
}

export default withRouter(Scheduler);
