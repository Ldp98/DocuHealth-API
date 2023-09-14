const oracledb = require('oracledb');
const database = require('../services/database.js')
 
async function find(id) {
  let query = `SELECT USUARIO,NOMBRES,APELLIDOS,PASSWORD,SITUACION,CARGO FROM WMS_USUARIOS WHERE USUARIO=:id`;
  //const user = { ...id };
  //const binds = { USUARIO: user.USUARIO };
  let binds ={};
  let result = {};
  if(id !== null){
    binds.id = id;
    result = await database.simpleExecute(query, binds)
    const user_found = result.rows[0];
    return user_found
  }else{
    result = await database.simpleExecute(query, binds);
    return null;
  }
  return user_found;
}

//find();

module.exports.find = find;