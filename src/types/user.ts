export interface IUser {
  id: number;
  name: string;
  color?: string;
}
export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
}
interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
  payload: IUser[];
}
export type UserActions = FetchUsersAction;
