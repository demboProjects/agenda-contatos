import express, { application } from "express";

const app = express();

app.get("/", (resquest, response) => {
    response.send("Hello world from express");
});


app.listen(3000, () => {
    console.log("server is ronning");
});