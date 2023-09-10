const oracledb = require('oracledb');
const database = require('../services/database.js')
 
async function find(id) {
  let query = `SELECT USUARIO,NOMBRES,APELLIDOS,PASSWORD,SITUACION,CARGO FROM WMS_USUARIOS WHERE USUARIO=:id`;
  const binds = {};
  binds.id = id;
  const result = await database.simpleExecute(query, binds);
  console.log(result.rows);
  return result.rows;
}

find();

module.exports.find = find;