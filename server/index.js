const express = require("express");
const app = express();
const app = cors();

//middleware
app.use(cors())

app.listen(5000, () => {
    console.log("server has started on port 5000");
});