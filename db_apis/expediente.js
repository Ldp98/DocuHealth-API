const oracledb = require('oracledb');
const database = require('../services/database.js')

async function find(id) {
  let query = `SELECT * FROM DAT_V_DIAGNOSTICOS WHERE CARNET=:id`;
  const binds = {};
  binds.id = id;
  const result = await database.simpleExecute(query, binds);
  //console.log(result.rows);
  return result.rows
}

//find();

module.exports.find = find;

//async function add(codigodiagnostico,tipodiagnostico,clinica,socio,tipoconsulta,doctor,usuario,noconsulta) {
async function add(extend) {
  let query = `BEGIN 
    \nPAC_P_DOCUHEALTH.AGREGAR_EXPEDIENTE(:CODIGO_DIAGNOSTICO, :TIPO_DIAGNOSTICO, :CLINICA, :SOCIO, :TIPO_CONSULTA, :DOCTOR, :USUARIO, :NO_CONSULTA); 
    \nEND;`;
  let binds = {
  codigo_diagnostico: extend.codigo_diagnostico,
  tipo_diagnostico: extend.tipodiagnostico,
  clinica: extend.clinica,
  socio: extend.socio,
  tipo_consulta: extend.tipoconsulta,
  doctor: extend.doctor,
  usuario: extend.usuario,
  no_consulta: extend.no_consulta
};
  //console.log(binds)
  const result = await database.simpleExecute(query, binds, { autoCommit: true });
  //console.log(result)
  return result;
}

//add();

module.exports.add = add;
