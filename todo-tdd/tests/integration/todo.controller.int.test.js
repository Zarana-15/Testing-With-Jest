const request = require("supertest");
const app =require("../../app");
const newTodo = require("../mock-data/new-todo");
const mongoose = require("mongoose");
const endPointUrl = "/todos/";

describe(endPointUrl, () => {
    
    beforeAll(() => {
        mongoose.connect('mongodb://localhost:27017/Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });
    })

    it("POST" + endPointUrl, async () => {
        jest.setTimeout(15000);
        const response = await request(app)
        .post(endPointUrl)
        .send(newTodo);
        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe(newTodo.title);
        expect(response.body.done).toBe(newTodo.done);
    });

});