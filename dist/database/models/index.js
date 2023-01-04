"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _config = _interopRequireDefault(require("../config.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const env = process.env.NODE_ENV || "development";
const config = _config.default[env];
const db = {};
let sequelize = new _sequelize.default({
  database: config.database,
  username: config.username,
  password: config.password,
  host: config.host,
  //tcp:swapup-dev.database.windows.net,1433
  dialect: "mssql",
  encrypt: true,
  port: 1433,
  dialectOptions: {
    encrypt: true,
    packetSize: 32768,
    options: {
      useUTC: false,
      dateFirst: 1
    }
    //authentication: { options: { userName: dbServerCredentials.userName,//<svc account>@<my-company.com>@<database server>,  password: dbServerCredentials.password,// <svc account password> }, type: 'azure-active-directory-password', }, }, });
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

//TODO: Manually expose all models here
db.users = require("./user.js")(sequelize, _sequelize.default);
db.swaps = require("./swap.js")(sequelize, _sequelize.default);
db.sequelize = sequelize;
db.Sequelize = _sequelize.default;
var _default = db;
exports.default = _default;
//# sourceMappingURL=index.js.map