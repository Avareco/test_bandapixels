export interface ITodo {
	id: number
	title: string
	tasks: ITask[]
}
export interface ITask {
	id: number
	userId: number
	title: string
}

export enum TodosActionTypes {
	FETCH_TODOS = "FETCH_TODOS",
	CLICK_TODO = "CLICK_TODO"
}

export type TodosActions = FetchTodosAction | ClickTodoAction

interface FetchTodosAction {
	type: TodosActionTypes.FETCH_TODOS
	payload: any[]
}
interface ClickTodoAction {
	type: TodosActionTypes.CLICK_TODO
	payload: any
}
