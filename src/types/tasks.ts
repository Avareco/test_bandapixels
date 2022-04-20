export enum UserActionTypes {
	FETCH_TODOS = "FETCH_TODOS",
	FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
	FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
}
export type UserAction = FetchUsersAction
	| FetchUsersSuccessAction
	| FetchUsersErrorAction
interface FetchUsersAction {
	type: UserActionTypes.FETCH_TODOS_ERROR
}
interface FetchUsersSuccessAction {
	type: UserActionTypes.FETCH_TODOS_ERROR
	payload: any[]
}
interface FetchUsersErrorAction {
	type: UserActionTypes.FETCH_TODOS_ERROR
	payload: string
}
export interface ITodos {
	id: number
	title: string
	items: ITask[]
}
export interface IUser {
	id: number
	name: string
	color?: string
}
export interface ITask {
	id: number
	userid: number
	title: string
}