const http = require('http');
const axios = require('axios'); // Import axios
const port = 3000;
const server = http.createServer(async (req, res) => {
    try {
        const response = await axios.get("https://dummyjson.com/products");
        const productsData = response.data.products; // Access 'products' array properly

        console.log('Hello from the server!');

        let frontdata = `<html><head><title>Product List</title></head><body>`;
        productsData.forEach((product) => {
            frontdata += `<div><img src="${product.thumbnail}" alt="${product.title}"><p>${product.title}</p></div>`;
        });
        frontdata += '</body></html>';

        res.writeHead(200, { 'Content-Type': 'text/html' }); // Set response type to HTML
        res.end(frontdata); // Send the HTML response
    } catch (error) {
        console.error("Error fetching data:", error.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end("Internal Server Error");
    }
});
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});




