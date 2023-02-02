"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(200).json({ success: true, Todo: todos });
});
router.put('/todo/:id', (req, res, next) => {
    const todoDel = req.params.id;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === todoDel);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({ message: 'Updated todo', todos: todos });
    }
    res.status(404).json({ message: "Could not find the todo" });
});
router.delete('/deletetodo/:delid', (req, res, next) => {
    const del = req.params.delid;
    console.log(del);
    todos = todos.filter((todoItem) => todoItem.id !== del);
    console.log(todos);
    return res.status(200).json({ success: true, message: "Todo is successfully deleted", todos: todos });
});
exports.default = router;
