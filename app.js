const express = require('express');
const oracledb = require('oracledb');
const database = require('./services/database.js')
const routes = require('./services/routes.js');

const app = express();

app.set("port", process.env.PORT  || 3000);

// app.use('/', (req, res)=>{
//     res.send("Welcome to API");
// })

app.use('/', routes)



app.listen(app.get("port"), () =>{
    console.log("server is runing on port :", app.get("port"));
});


async function startup() {
    console.log('Starting application');
    try {
      console.log('Initializing database module');
  
      await database.initialize();
    } catch (err) {
      console.error(err);
  
      process.exit(1); // Non-zero failure code
    }
}

startup();