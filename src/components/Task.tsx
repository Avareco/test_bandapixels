import React, { FC } from 'react'
import { ITask } from '../types/tasks'
interface TaskProps {
	task: ITask
}
export const Task: FC<TaskProps> = ({ task }) => {

	return (<>
		<div className="task">
			<div className="task__container">
				<div className="task__img">
				</div>
				<div className="task__text">
					{task.title}
				</div>
			</div>
		</div>
	</>
	)
}
