const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// middleware
app.use(routes);

// sync sequelize models to the database, then turn on the server
// sequelize.sync connects to db in mysql and creates the tables from models
sequelize.sync().then(()=>{
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
  
});