import { FC } from "react";
import { ITodo } from "../types/todo";

import { Task } from "./Task";
interface TickedItemProps {
  ticketItem: ITodo;
  taskStatus: string;
}
export const TickedItem: FC<TickedItemProps> = ({ ticketItem, taskStatus }) => {
  return (
    <>
      {ticketItem.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          item={ticketItem}
          taskStatus={taskStatus}
        />
      ))}
    </>
  );
};
