import React, { FC, useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { ITask, IUser } from '../types/tasks'

import styles from "./Task.module.scss"

interface TaskProps {
	task: ITask
	taskStatus?: string
	color?: any
}
export const Task: FC<TaskProps> = ({ task, taskStatus, color }) => {
	const users = useContext<IUser[]>(AppContext)
	const firstLetters = () => {
	}
	let user: IUser = { id: 0, name: "" };
	const getUser = () => {
		for (const key in users) {
			if (users[key].id === task.userid) {
				user = users[key]
			}
		}
	}
	getUser()



	let acronym = user.name.match(/\b(\w)/g)?.join("");
	console.log(acronym)
	return (<>
		<div className="task">
			<div className="task__container">
				<div className="task__img" style={{ backgroundColor: user.color }} >
					<div className="task__letters">
						{acronym}
					</div>
				</div>
				<div className="task__text">{task.title}</div>
			</div>
			<div className="task__status">{taskStatus}</div>
		</div>
	</>
	)
}
