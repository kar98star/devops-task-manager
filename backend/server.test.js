const request = require("supertest");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Task Manager API is running"
    });
});

test("GET / should return success message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Task Manager API is running");
});