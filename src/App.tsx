import axios from 'axios';
import { useEffect, useState } from 'react';
import "./App.scss"
import { Board } from './components/Board';
import { Ticket } from './components/Ticket';
import { AppContext } from './context/AppContext';

import { ITodos, IUser } from './types/tasks';


function App() {
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const randomColor = ()=>'#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
				const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
				setUsers(response.data.map(item => ({ ...item, color: randomColor() })))
			} catch (error) {
				alert("Can't download users!")
				console.log(error)
			}

		};
		fetchUsers()

	}, [])
	const [todos, setTodos] = useState<ITodos[]>([
		{
			id: 1, title: "Todo", items: [
				{
					id: 1,
					userid: 1,
					title: "1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lore...",
				},
				{
					id: 4,
					userid: 1,
					title: "1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lore...",
				},
			],
		},
		{
			id: 2, title: "In progress", items: [
				{ id: 2, userid: 2, title: "2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lore...", }
			],
		},
		{
			id: 3, title: "Done", items: [
				{ id: 3, userid: 3, title: "3Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lore...", }
			],
		},
	])
	const [users, setUsers] = useState<IUser[]>([
		{
			"id": 1,
			"name": "Leanne Graham",
			
		 },
		 {
			"id": 2,
			"name": "Ervin Howell",
			
		 },
		 {
			"id": 3,
			"name": "Clementine Bauch",
			
		 },
	])
	console.log(users)
	return (
		<AppContext.Provider value={users}>
			<div className="wrapper">
				<Board todos={todos} />
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