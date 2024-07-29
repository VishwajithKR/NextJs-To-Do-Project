"use client";

import React, { FormEventHandler, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Model from "./model";
import { addTodo } from "../../../api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const AddTask: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newtaskValue, setNewTaskValue] = useState<string>("");
  

  const router = useRouter();

  // ========== Api Call and Post method is Progress ========== //

  const handleSubmitTodoTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!newtaskValue.trim()) {
      alert("Your Task is Empty");
    } else {
      try {
        await addTodo({
          id: uuidv4(),
          text: newtaskValue,
        });
        setNewTaskValue("");
        setModalOpen(false);
        router.refresh();
      } catch (error) {
        console.error("Error editing task:", error);
      }
    }
  };

  return (
    <div>
      <button
        className="btn btn-primary w-full"
        onClick={() => setModalOpen(true)}
      >
        Add New Task
        <AiOutlinePlus size={18} className="ml-2" />
      </button>
      <Model modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitTodoTask}>
          <h3 className="font-bold text-lg">Add New Task</h3>
          <div className="modal-action">
            <input
              value={newtaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
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
    </div>
  );
};

export default AddTask;
