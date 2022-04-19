import React, { FC } from 'react'
import { ITodos } from '../types/tasks'
import { BoardItem } from './BoardItem'
interface BoardProps {
	todos: ITodos[]
}
export const Board: FC<BoardProps> = ({ todos }) => {
	return (
		<div className='board'>
			<h2>Board</h2>
			<div className='todo-wrapper todo-wrapper_board'>
				{todos.map(boardItem =>
					<BoardItem key={boardItem.id} boardItem={boardItem} />
				)}
			</div>
		</div>
	)
} 
