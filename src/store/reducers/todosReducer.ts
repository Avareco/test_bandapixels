import { ITodo, TodosActions, TodosActionTypes } from "../../types/todo";

const defaultState: ITodo[] = [
	{
		id: 1, title: "Todo", tasks: [

		],
	},
	{
		id: 2, title: "In Progress", tasks: [

		],
	},
	{
		id: 3, title: "Done", tasks: [

		],
	},
]

export const todosReducer = (state = defaultState, action: TodosActions) => {
	switch (action.type) {
		case TodosActionTypes.FETCH_TODOS:

			return state.map((item, index) => {
				if (index === 0) {
					return { ...item, tasks: action.payload }
				}
				return item
			});

		case TodosActionTypes.CLICK_TODO:

			const task = action.payload.task
			const item = action.payload.item
			const nextItem = state[state.indexOf(item) + 1]
			const indexOfTask = item.tasks.indexOf(task)

			item.tasks.splice(indexOfTask, 1)
			nextItem.tasks.push(task)

			return state.map(item => {
				return item;
			});


		default: return [...state]

	}
}