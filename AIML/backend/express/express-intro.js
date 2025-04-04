import express from 'express';

const app = express();
const port = 3000;

// Route with parameters (name & rollno)
app.get(`/api/:name/:rollno`, (req, res) => {
    try {
        const { name, rollno } = req.params;
        res.send(`Welcome ${name}! Your Roll Number is ${rollno}.`);
    } catch (error) {
        res.send("Welcome to Express");
    }
});

// Route with query parameters
app.get(`/api`, (req, res) => {
    const { name = "Guest", id = 100 } = req.query;
    console.log(req.query);
    res.send(`Welcome to ABES: ${name} and Roll number ID: ${id}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
