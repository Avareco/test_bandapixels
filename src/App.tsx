import React, { useState } from 'react';
import "./App.scss"
import { Board } from './components/Board';
import { Ticket } from './components/Ticket';
import AppContext from './context/context';
import { ITodos } from './types/tasks';


function App() {
	const [todos, setTodos] = useState<ITodos[]>([
		{
			id: 1, title: "Todo", items: [
				{
					id: 1,
					name: "Leanne Graham",
					title: "1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lore...",
				},
				{
					id: 4,
					name: "Leanne Graham",
					title: "1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lore...",
				},
			],
		},
		{
			id: 2, title: "In progress", items: [
				{ id: 2, name: "Ervin Howell", title: "2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lore...", }
			],
		},
		{
			id: 3, title: "Done", items: [
				{ id: 3, name: "Clementine Bauch", title: "3Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lore...", }
			],
		},
	])
	return (
		<AppContext.Provider value={{setTodos}}>
			<div className="wrapper">
				<Board
					todos={
						todos
					} />

				<Ticket todos={todos} />
			</div>
		</AppContext.Provider>
	);
}

export default App;
/*

<div className="ticket">
				<h2>Ticket list</h2>
				<div className="todo-wrapper todo-wrapper_ticket">
					<div className="task">
						<div className="task__img">
						</div>
						<div className="task__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lore...</div>
					</div>
				</div>
			</div>


<div className='board__item'>
					<h2>Todo</h2>
					<div className="task">
						<div className="task__img">
						</div>
						<div className="task__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lore...</div>
					</div>
				</div>

				<div className="horisontal-line"></div>

				<div className='board__item'>
					<h2>Progress</h2>
					<div className="task">
						<div className="task__img">
						</div>
						<div className="task__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lore...</div>
					</div>

				</div>

				<div className="horisontal-line"></div>

				<div className='board__item'>
					<h2>Done</h2>
				</div>
				
				
				*/