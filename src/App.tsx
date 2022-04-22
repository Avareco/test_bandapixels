import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import "./App.scss"
import { Board } from './components/Board';
import { Ticket } from './components/Ticket';
import { AppContext } from './context/AppContext';
import { ITodo, TodosActionTypes } from './types/todo';

import { IUser } from './types/user';


function App() {
	const dispath = useDispatch()
	const [users, setUsers] = useState<IUser[]>([])

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const randomColor = (): string => '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
				const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
				setUsers(response.data.map(item => ({ ...item, color: randomColor() })))
			} catch (error) {
				alert("Can't download users!")
				console.log(error)
			}
		};
		const fetchTodos = async () => {
			try {
				const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos/?completed=true&_page=2&_limit=10")
				dispath({ type: TodosActionTypes.FETCH_TODOS, payload: response.data })
			} catch (error) {
				alert("Can't download users!")
				console.log(error)
			}
		}

		fetchUsers()
		fetchTodos()

	}, [])

	return (
		<AppContext.Provider value={users}>
			<div className="wrapper">
				<Board />
				<Ticket />
			</div>
		</AppContext.Provider>
	);
}

export default App;
