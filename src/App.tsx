import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.scss";
import { Board } from "./components/Board";
import { Ticket } from "./components/Ticket";
import { fetchTodos } from "./store/actionCreators/todo";
import { fetchUsers } from "./store/actionCreators/user";

function App() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchTodos());
  }, []);

  return (
    <div className="wrapper">
      <Board />
      <Ticket />
    </div>
  );
}

export default App;
