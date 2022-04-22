import { FC, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { AppContext } from '../context/AppContext'
import { ITask, ITodo, TodosActionTypes } from '../types/todo'
import { IUser } from '../types/user'

interface TaskProps {
	task: ITask
	item: ITodo
	taskStatus?: string
}

export const Task: FC<TaskProps> = ({ item, task, taskStatus }) => {
	const dispatch = useDispatch()
	const users = useContext<IUser[]>(AppContext)
	let user: IUser = { id: 0, name: "" };

	const getUser = () => {
		for (const key in users) {
			if (users[key].id === task.userId) {
				user = users[key]
			}
		}
	}
	getUser()

	let firstLetters: string | undefined = user.name
		.match(/\b(\w)/g)
		?.join("")
		.substring(0, 2)
		.toUpperCase();

	const onTaskClick = () => {
		dispatch({
			type: TodosActionTypes.CLICK_TODO,
			payload: { item: item, task: task }
		})
	}

	return (
		<>
			<div onClick={() => {
				item.id === 3 ?
					alert("Task is done!") :
					onTaskClick()
			}}
				className="task">
				<div className="task__container">
					<div className="task__img" style={{ backgroundColor: user.color }} >
						<div className="task__letters">
							{firstLetters}
						</div>
					</div>
					<div className="task__text">{taskStatus ?
						task.title :
						(task.title.length > 79 ?
							task.title.substring(0, 79) + "..." :
							task.title)}
					</div>
				</div>
				<div className="task__status">{taskStatus}</div>
			</div>
		</>
	)
}
