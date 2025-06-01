import * as Todo from "../models/todo.model.js";
import { formatDate } from "../utils/date-formater.js";

// FITUR SHOW TODOS
export const getAllTodos = async (req, res) => {
  try {
    const result = await Todo.getAllTodos();
    const tasks = result.map((task) => ({
      id: task.id,
      title: task.title,
      done: Boolean(task.id),
      created_at: formatDate(task.created_at),
    }));
    res.status(201).json({ succes: true, data: tasks });
  } catch (err) {
    console.log(`error: ${err}`);
    res.status(500).json({ error: "found error" });
  }
};

// FITUR ADD TODOS
export const createTodo = async (req, res) => {
  // kondisi jika title di request kososng
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "title is required" });
  }
  try {
    const newTodo = await Todo.createTodo(title);
    res.status(201).json({ message: `sucesfully add new todos ${title}` });
  } catch (err) {
    console.log(`error: ${err}`);
    res.status(500).json({ error: "cannot connect error" });
  }
};

// FITUR DELETE TODOS
export const deleteTodo = async (req, res) => {
  const id = req.body.id;
  if (!id)
    return res
      .status(400)
      .json({ error: "id is required for delete some taks" });

  try {
    const result = await Todo.deleteTodo(id);
    res.status(201).json({ message: `sucessfully delete task with id: ${id}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, message: `${id} not found` });
  }
};

// FITUR UPDATE TITLE TODOS
export const updateTodoTitle = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  if (!id)
    return res
      .status(400)
      .json({ error: "id is required for update some taks" });
  try {
    const result = await Todo.updateTodoTitle(id, title);
    res.status(201).json({ message: `sucessfully update task` });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
      message: `${id} not found please check id is valid for update a task`,
    });
  }
};

// FITUR UPDATE STATUS TODOS
export const updateTodoStatus = async (req, res) => {
  const { is_done } = req.body;
  const { id } = req.params;
  if (!id)
    return res
      .status(400)
      .json({ error: "id is required for update some tasks" });
  try {
    const result = await Todo.updateTodoStatus(id, is_done);
    res.status(201).json({ message: `sucessfully update task` });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
      message: `${id} not found please check id is valid for update a task`,
    });
  }
};
