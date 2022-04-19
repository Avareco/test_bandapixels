import React, { FC } from 'react'
import { ITodos } from '../types/tasks'
import { TickedItem } from './TickedItem'
interface TicketProps {
	todos: ITodos[]
}
export const Ticket: FC<TicketProps> = ({ todos }) => {
	return (
		<div className="ticket">
			<h2>Ticket list</h2>
			<div className="todo-wrapper todo-wrapper_ticket">
				{todos.map(ticketItem =>
					<TickedItem ticketItem={ticketItem} taskStatus={ticketItem.title} />
				)}


			</div>
		</div>
	)
}
