import { Dispatch, FC } from "react";
import { useDispatch } from "react-redux";

import { ClickTodo } from "../store/actionCreators/todo";
import { useTypedSelector } from "../hooks/useTypedSelector";

import { ITask, ITodo, TodosActions } from "../types/todo";
import { IUser } from "../types/user";

interface TaskProps {
  task: ITask;
  item: ITodo;
  taskStatus?: string;
}

export const Task: FC<TaskProps> = ({ item, task, taskStatus }) => {
  const dispatch: Dispatch<TodosActions> = useDispatch();
  const users: IUser[] = useTypedSelector((state) => state.users);
  let user: IUser = { id: 0, name: "" };

  const getUser = (): void => {
    for (const key in users) {
      if (users[key].id === task.userId) {
        user = users[key];
      }
    }
  };
  getUser();

  let firstLetters: string | undefined = user.name
    .match(/\b(\w)/g)
    ?.join("")
    .substring(0, 2)
    .toUpperCase();

  const onTaskClick = (): void => {
    dispatch(ClickTodo({ item: item, task: task }));
  };

  return (
    <>
      <div
        onClick={() => {
          item.id === 3 ? alert("Task is done!") : onTaskClick();
        }}
        className="task"
      >
        <div className="task__container">
          <div className="task__img" style={{ backgroundColor: user.color }}>
            <div className="task__letters">{firstLetters}</div>
          </div>
          <div className="task__text">
            {taskStatus
              ? task.title
              : task.title.length > 79
              ? task.title.substring(0, 79) + "..."
              : task.title}
          </div>
        </div>
        <div className="task__status">{taskStatus}</div>
      </div>
    </>
  );
};
