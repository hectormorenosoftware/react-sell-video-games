import { ADD_ORDER_TYPE, ADD_ORDER, REMOVE_ORDER } from "../../types";
const date = new Date();

const INTIAL_STATE = {
  orderType: {},
  orders: [
    {
      id: 1,
      name: "Nicholas",
      lastName: "Tesla",
      time: date.toString(),
      type: "Game Cube",
      phoneNumber: "202-000-3949",
      address: "241 East Ave Dallas Texas 83883",
      email: "nickolas@gmail.com",
    },
  ],
};

function ordersReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case ADD_ORDER_TYPE:
      const { text, image, title, phoneNumber, email, address, price } =
        action.payload;

      return {
        ...state,
        orderType: { text, image, title, phoneNumber, email, address, price },
      };

    case ADD_ORDER:
      const newArr = [...state.orders, action.payload];
      return { ...state, orders: newArr };

    case REMOVE_ORDER:
      return {
        orders: state.orders.filter((order) => order.id !== action.payload.id),
      };

    default:
      return state;
  }
}

export default ordersReducer;
