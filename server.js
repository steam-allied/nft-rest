import "dotenv/config"; //preload all the environment values

import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './api/routes/index.js';
const app = express();
const port = process.env.PORT || 3000;

//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));

/**
 * Adding headers to our requests.
 */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      return res.status(200).json({});
    }
    next();
});

app.use("/api", apiRouter);
app.listen(port);

app.use((req, res, next) => {
    const error = Error("Not found");
    res.statusCode = 404;
    res.send({ error: error.message });
});

console.log('SwapUp RESTful API server started on: ' + port);