const express = require("express");
const res = require("express/lib/response");
const app = express();

//prepara a aplicação para receber via body o tipo json
//Middleware
app.use(express.json());

app.get("/courses", (request, response) => {
    const query = request.query;
    
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body);

    return response.json(["Curso 4", "Curso 5", "Curso 6"]);
});

app.put("/courses/:id", (request, response) => {
    const params = response.params;

    return response.json(["Curso 7", "Curso 8", "Curso 9"]);
});

app.patch("/courses/:id", (request, response) => {
    const params = response.params;

    return response.json(["Curso 10", "Curso 11", "Curso 12"]);
});

app.delete("/courses/:id", (request, response) => {
    const params = response.params;
    
    return response.json(["Curso 13", "Curso 14", "Curso 15"]);
});

app.listen(3333);