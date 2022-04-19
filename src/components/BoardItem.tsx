import React, { FC } from 'react'
import { ITodos } from '../types/tasks'
import { Task } from './Task'

interface BoardItemProps {
	boardItem: ITodos
}
export const BoardItem: FC<BoardItemProps> = ({ boardItem }) => {
	return (
		<>
			<div key={boardItem.id} className='board__item'>
				<h3>{boardItem.title}</h3>
				{boardItem.items.map(task =>
						<Task key={task.id} task={task} />
					
				)}
			</div>
			<div className="horisontal-line"></div>
		</>
	)
}
