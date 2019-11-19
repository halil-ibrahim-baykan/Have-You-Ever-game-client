import { JWT, NEW_USER } from "../actions/user";

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case JWT:
      return action.payload;
    case NEW_USER:
      return [action.payload, ...state];
    default:
      return state;
  }
}
