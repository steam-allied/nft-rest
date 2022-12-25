import path from 'path';
import Sequelize from 'sequelize';
import configuration from '../config.js';

const env = process.env.NODE_ENV || 'development';
const config = configuration[env];
const db = {};

let sequelize = new Sequelize({database: config.database, 
  username: config.username, 
  password: config.password, 
  host: config.host, //tcp:swapup-dev.database.windows.net,1433
  dialect: 'mssql', 
  encrypt: true,   
  port: 1433, 
  dialectOptions: 
  { 
      encrypt: true, packetSize: 32768, 
      options: { useUTC: false, dateFirst: 1 }, 
      //authentication: { options: { userName: dbServerCredentials.userName,//<svc account>@<my-company.com>@<database server>,  password: dbServerCredentials.password,// <svc account password> }, type: 'azure-active-directory-password', }, }, });
  },
  pool: 
  {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
});

///TODO: Manually expose all models here
db.users = require("./user.js")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;