import { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ITodo } from "../types/todo";

import { BoardItem } from "./BoardItem";

export const Board: FC = () => {
  const todos: ITodo[] = useTypedSelector((state) => state.todos);
  return (
    <div className="board">
      <h2>Board</h2>
      <div className="todo-wrapper todo-wrapper_board">
        {todos.map((boardItem) => (
          <BoardItem key={boardItem.id} boardItem={boardItem} />
        ))}
      </div>
    </div>
  );
};
