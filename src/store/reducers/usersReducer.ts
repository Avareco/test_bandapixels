
import { IUser, UserActions, UserActionTypes } from "../../types/user";

const defaultState: IUser[] = [];
export const usersReducer = (state = defaultState, action: UserActions) => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      const randomColor = (): string =>
        "#" +
        (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();

      return action.payload.map((user) => ({ ...user, color: randomColor() }));

    default:
      return state;
  }
};
export const fetchUsersAction = (payload: IUser[]) => ({
  type: UserActionTypes.FETCH_USERS,
  payload,
});
