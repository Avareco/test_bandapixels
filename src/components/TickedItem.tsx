import React, { FC } from 'react'
import { ITodos } from '../types/tasks'
interface TickedItemProps {
	ticketItem: ITodos
	taskStatus:string
}
export const TickedItem: FC<TickedItemProps> = ({ ticketItem, taskStatus}) => {
	return (
		<>
			{ticketItem.items.map(task =>
				<div className="task">
					<div className="task__container">
						<div className="task__img">
						</div>
						<div className="task__text">{task.title}</div>
					</div>
					<div className="task__status">{taskStatus}</div>
				</div>)}
		</>
	)
}
