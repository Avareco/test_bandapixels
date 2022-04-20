import React, { FC, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { ITodos, IUser } from '../types/tasks'
import { Task } from './Task'
interface TickedItemProps {
	ticketItem: ITodos
	taskStatus: string
}
export const TickedItem: FC<TickedItemProps> = ({ ticketItem, taskStatus }) => {
	const users = useContext<IUser[]>(AppContext)
	let user: IUser = { id: 0, name: "" };
	const getUser = (task: any) => {
		for (const key in users) {
			if (users[key].id === task.userid) {
				user = users[key]
			}
		}
		return user.color;
	}

	return (
		<>
			{ticketItem.items.map(task =>

				<Task key={task.id} task={task} taskStatus={taskStatus} color={getUser(task)} />


			)}
		</>
	)
}
