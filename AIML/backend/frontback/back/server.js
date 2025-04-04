import express from 'express';
import axios from 'axios';
const app = express();
import cors from 'cors'
const port =3000;
app.use(cors());
app.get("/api", async (req,res) => {
    const apidata = await axios.get("https://dummyjson.com/products");
    res.send(apidata.data.products);

});
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});