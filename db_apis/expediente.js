const oracledb = require('oracledb');
const database = require('../services/database.js')

async function find(id) {
  let query = `SELECT * FROM DAT_V_DIAGNOSTICOS WHERE CARNET=:id`;
  const binds = {};
  binds.id = id;
  const result = await database.simpleExecute(query, binds);
  //console.log(result.rows);
  return result.rows;
}

//find();

module.exports.find = find;