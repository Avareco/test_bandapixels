import { Dispatch } from "redux";
import axios from "axios";
import {
  IClickTodo,
  ITodo,
  TodosActions,
  TodosActionTypes,
} from "../../types/todo";

export const fetchTodos = () => {
  return async (dispatch: Dispatch<TodosActions>) => {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos/?completed=true&_page=2&_limit=10"
      );
      dispatch({ type: TodosActionTypes.FETCH_TODOS, payload: response.data });
    } catch (e) {
      alert("Can't download todos!");
      console.log(e);
    }
  };
};

export function ClickTodo(payload: IClickTodo): TodosActions {
  return { type: TodosActionTypes.CLICK_TODO, payload };
}
