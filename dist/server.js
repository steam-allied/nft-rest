"use strict";

require("dotenv/config");
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _index = _interopRequireDefault(require("./api/routes/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//preload all the environment values

const app = (0, _express.default)();
const port = process.env.PORT || 3000;

//parse application/json and look for raw text                                        
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.text());
app.use(_bodyParser.default.json({
  type: 'application/json'
}));

/**
 * Adding headers to our requests.
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    return res.status(200).json({});
  }
  next();
});
app.use("/api", _index.default);
app.listen(port);
app.use((req, res, next) => {
  const error = Error("Not found");
  res.statusCode = 404;
  res.send({
    error: error.message
  });
});
console.log('SwapUp RESTful API server started on: ' + port);
//# sourceMappingURL=server.js.map