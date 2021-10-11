import express from "express";
const app = express()

const PORT = process.env.PORT || 8080; 
const hostname = "127.0.0.1";

app.get("/", (_req,res) => {
             res.send("<h2>Let's code!</h2>")
});

app.listen(PORT as number,hostname, () => console.log(`listening on http://${hostname}:${PORT}`))
