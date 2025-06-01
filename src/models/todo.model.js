import { db } from "../config/db.js";

export const getAllTodos = async () => {
  const [rows] = await db.query("SELECT * FROM task");
  return rows;
};

export const createTodo = async (title) => {
  const query = "INSERT INTO task (title) VALUES (?)";
  const [result] = await db.query(query, [title]);
  return result;
};

export const deleteTodo = async (id) => {
  const query = "DELETE FROM task where id=?";
  const [result] = await db.query(query, [id]);
  return result;
};

export const updateTodoTitle = async (id, newTitle) => {
  const query = "UPDATE task SET title = ? WHERE id = ?";
  const result = await db.query(query, [newTitle, id]);
  return result;
};
export const updateTodoStatus = async (id, is_done) => {
  const query = "UPDATE task SET done = ? WHERE id = ?";
  const result = await db.query(query, [is_done, id]);
  return result;
};
