import { Dispatch } from "redux";
import axios from "axios";
import { IUser, UserActions, UserActionTypes } from "../../types/user";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );

      dispatch({
        type: UserActionTypes.FETCH_USERS,
        payload: response.data,
      });
    } catch (e) {
      alert("Can't download users!");
      console.log(e);
    }
  };
};
