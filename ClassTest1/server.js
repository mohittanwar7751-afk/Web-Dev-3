const http = require("http");

const server = http.createServer((req, res) => {

    console.log("URL:", req.url);
    console.log("Headers:", req.headers);

    if (req.url == "/home") {
        res.end("Home Page");
    }
    else if (req.url == "/about") {
        res.end("About Page");
    }
    else if (req.url == "/contact") {
        res.end("Contact Page");
    }
    else {
        res.end("Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});