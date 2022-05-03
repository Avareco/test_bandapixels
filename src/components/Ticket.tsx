import { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ITodo } from "../types/todo";

import { TickedItem } from "./TickedItem";

export const Ticket: FC = () => {
  const todos: ITodo[] = useTypedSelector((state) => state.todos);
  return (
    <div className="ticket">
      <h2>Ticket list</h2>
      <div className="todo-wrapper todo-wrapper_ticket">
        {todos.map((ticketItem) => (
          <TickedItem
            key={ticketItem.id}
            ticketItem={ticketItem}
            taskStatus={ticketItem.title}
          />
        ))}
      </div>
    </div>
  );
};
