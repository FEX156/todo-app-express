import express from "express";
import * as Todo from "../controllers/todo.controllers.js";

const router = express.Router();
router.get("/", Todo.getAllTodos);
router.post("/", Todo.createTodo);
router.delete("/", Todo.deleteTodo);
router.patch("/:id", Todo.updateTodoTitle);
router.patch("/status/:id", Todo.updateTodoStatus);
export default router;
