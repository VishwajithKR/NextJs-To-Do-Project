import axios from "axios";
import { ITask } from "./types/tasks";

// ========== Server URL ========== //
const BaseUrl = "https://66a7489853c13f22a3cf1a30.mockapi.io";


// ========== Get Method =========== //
export const getAllTodos = async (): Promise<ITask[]> => {
  try {
    const res = await axios.get(`${BaseUrl}/todo_task`);
    return res.data;
    console.log(res.data)
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};
// export const getAllTodos = async (): Promise<ITask[]> => {
//   try {
//     const response = await fetch(`${BaseUrl}/todo_task`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
// // console.log(response)
//     if (!response.ok) {
//       throw new Error(`Network response was not ok: ${response.statusText}`);
//     }

//     const data = await response.json();
//     return data;
//     console.log(data,"Bopathi data")
//   } catch (error) {
//     console.error('Error fetching todos:', error);
//     throw error;
//   }
// };

// ========== Post Method ========== //
export const addTodo = async (data: ITask): Promise<ITask> => {
  try {
    const response = await axios.post(`${BaseUrl}/todo_task`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

// ========== Put method ========== //
export const editTodo = async (data: ITask): Promise<ITask> => {
  try {
    const response = await axios.put(`${BaseUrl}/todo_task/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error editing todo:", error);
    throw error;
  }
};

// ========== Delete Method ========= //
export const deleteTodo = async (id_mock_api: string): Promise<void> => {
  try {
    await axios.delete(`${BaseUrl}/todo_task/${id_mock_api}`);
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
