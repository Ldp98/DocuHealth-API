const express = require('express');
const oracledb = require('oracledb');
const database = require('./services/database.js')

const app = express();

app.set("port", process.env.PORT  || 3000);

app.use("/", (req, res)=>{
    res.send("Welcome to API");
})

app.listen(app.get("port"), () =>{
    console.log("server is runing on port :", app.get("port"));
});




const baseQuery =
  `SELECT EMPRESA, NOMBRE FROM WMS_EMPRESAS`;

async function find(context) {
  let query = baseQuery;
  const binds = {};
  const result = await database.simpleExecute(query, binds);
  console.log(result.rows);
  return result.rows;
}

find();

module.exports.find = find;