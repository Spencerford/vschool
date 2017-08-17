let express = require("express");

let app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT,  () => {
    console.log(`starting server on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Starting this thing up ${PORT}`)
});