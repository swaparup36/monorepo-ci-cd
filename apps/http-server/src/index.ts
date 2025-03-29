import express from "express";
import client from "@repo/db/client";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await client.user.create({
        data: {
            username: username,
            password: password
        }
    });

    res.json({
        success: true,
        userId: user.id,
        message: "Signup successful"
    });
});

app.listen(8000, () => {console.log("Http server started on port 8000")});