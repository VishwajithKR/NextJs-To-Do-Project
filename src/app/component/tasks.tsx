"use client";
import React, { FormEventHandler, useState } from "react";
import { ITask } from "../../../types/tasks";
import { FiEdit } from "react-icons/fi";
import { CgTrash } from "react-icons/cg";
import Model from "./model";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "../../../api";

interface Taskprops {
  task: ITask;
}

const tasks: React.FC<Taskprops> = ({ task }) => {
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
  
  const router = useRouter();

  // ========== Api Call and Put method is Progress ========== //
  const handleSubmitEditTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!taskToEdit.trim()) {
      alert("Fill the Form");
    } else {
      try {
        await editTodo({
          id: task.id,
          text: taskToEdit,
        });
        // setTaskToEdit("");
        setOpenModalEdit(false);
        router.refresh();
      } catch (error) {
        console.error("Error editing task:", error);
      }
    }
  };

  // ========== Api Call and Delete method is Progress ========== //
  const handleDeleteTask = async (id_mock_api: string) => {
    await deleteTodo(id_mock_api);
    setOpenModalDelete(false);
    router.refresh();
  };
  return (
    <tr key={task.id}>
      <td className="w-full ">{task.text}</td>
      <td className="flex gap-6">
        <FiEdit
          className="text-blue-500 cursor-pointer"
          size={18}
          onClick={() => setOpenModalEdit(true)}
        />
        <Model modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTask}>
            <h3 className="font-bold text-lg">Add New Task</h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </Model>
        <CgTrash
          className="text-red-500 cursor-pointer"
          size={18}
          onClick={() => setOpenModalDelete(true)}
        />
        <Model modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className="text-lg">
            Are you sure , you want to delete this task?
          </h3>
          <div className="model-action text-center">
            <button onClick={() => handleDeleteTask(task.id)} className="btn">
              Yes
            </button>
          </div>
        </Model>
      </td>
    </tr>
  );
};

export default tasks;
