import { ITodos } from "../../types/tasks"

const defaultState: ITodos[] = [
	{
		id: 1, title: "Todo", items: [
			{
				id: 0,
				userid:0,
				title: "",
			},
		],
	},
	{
		id: 1, title: "In progress", items: [
			{
				id: 0,
				userid:0,
				title: "",
			},
		],
	},
	{
		id: 1, title: "Done", items: [
			{
				id: 0,
				userid:0,
				title: "",
			},
		],
	},
]
export const todosReducer = (state = defaultState, action: any)=>{
	switch (action.type) {
		case "FETCH_TODOS":
			return;
		case "FETCH_TODOS_SUCCESS":
			return;
		case "FETCH_TODOS_ERROR":
			return;
			
		default: [...state]
			break;
	}
}