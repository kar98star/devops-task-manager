const express = require("express");

const app = express();

app.use(express.json());

let tasks = [
    {
        id: 1,
        title: "Learn Docker",
        completed: false
    },
    {
        id: 2,
        title: "Learn GitHub Actions",
        completed: false
    }
];

app.get("/", (req, res) => {
    res.json({
        message: "Task Manager API is running"
    });
});

app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/api/tasks", (req, res) => {

    const task = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };

    tasks.push(task);

    res.status(201).json(task);
});

app.delete("/api/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    tasks = tasks.filter(task => task.id !== id);

    res.json({
        message: "Task deleted"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});