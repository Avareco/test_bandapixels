import  { FC } from 'react'
import { ITodo } from '../types/todo'

import { Task } from './Task'

interface BoardItemProps {
	boardItem: ITodo

}
export const BoardItem: FC<BoardItemProps> = ({ boardItem }) => {
	return (
		<>
			<div key={boardItem.id} className='board__item'>
				<h3>{boardItem.title}</h3>
				{boardItem.tasks.map(task =>
					<Task key={task.id} item={boardItem} task={task} />

				)}
			</div>
			<div className="horisontal-line"></div>
		</>
	)
}
