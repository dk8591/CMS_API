const express= require("express");
const compression = require('compression');
const cors= require("cors");
const app=express();
const bodyParser = require("body-parser");
const pool = require("./db");


// parse requests of content-type - application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: "50mb", extended: true }));
process.env.AZURE_STORAGE_CONNECTION_STRING="DefaultEndpointsProtocol=https;AccountName=soliscontainer;AccountKey=pNtFL1eGpZdEdILmJlC8JZzG8d/jXoxPePIK9GpdoKMqjMb6q+Ax/9bBpI5HcUQ16NMngOcncxa2cV6CTaqm2Q==;EndpointSuffix=core.windows.net";
app.use(cors());
app.use(express.json());

app.use(compression({level:6}));

require("./app/routes/blogentries.route.js")(app);
require("./app/routes/user.route.js")(app);
require("./app/routes/comments.route.js")(app);

const port=5001;
app.listen(port,()=>{
    console.log("Server running on Port "+port);
})