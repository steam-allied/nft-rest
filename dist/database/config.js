"use strict";

require("dotenv").config();
console.log("sequelize config: ", process.env.NODE_ENV, "it is being loaded correctly");
const configuration = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PWD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mssql",
    "port": 1433,
    "migrationStorage": "json",
    // Use a different storage type. Default: sequelize
    "migrationStoragePath": "sequelizeMeta.json",
    // Use a different file name. Default: sequelize-meta.json
    "seederStorage": "json",
    // Use a different storage. Default: none
    "seederStoragePath": "sequelizeData.json" // Use a different file name. Default: sequelize-data.json
  },

  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};
console.log(configuration);
module.exports = configuration;
//# sourceMappingURL=config.js.map