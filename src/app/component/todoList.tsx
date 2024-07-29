import React from "react";
import { ITask } from "../../../types/tasks";
import Tasks from "./tasks";

interface TodoList {
  tasks: ITask[];
}

const todoList: React.FC<TodoList> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tasks.map((obj) => {
            return <Tasks key={obj.id} task={obj} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default todoList;
