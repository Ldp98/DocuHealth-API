const expediente = require('../db_apis/expediente.js');


async function get(req, res, next) {
  try {

    const context = {};
    //context.id = req.params.id//nuevo
    let id = req.params.id;
    const rows = await expediente.find(id);

    if (req.params.id) {
      if (rows !== null) {  
        
        res.status(200).json(rows);
      }else{
        res.status(403).end();
      }
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}


module.exports.get = get;


//Metodo post para expedientes


function getExpedienteFromRecToAdd(req) {
  const addExpediente = {
    codigo_diagnostico: req.body.codigo_diagnostico,
    tipo_diagnostico: req.body.tipo_diagnostico,
    clinica: req.body.clinica,
    socio: req.body.socio,
    tipo_consulta: req.body.tipo_consulta,
    doctor: req.body.doctor,
    usuario: req.body.usuario,
    no_consulta: req.body.no_consulta
  }
  return addExpediente;
}

async function post(req, res, next) {
  try {
    console.log(req.body)
    let newExpediente = getExpedienteFromRecToAdd(req);
    //let response = await expediente.add(codigodiagnostico,tipodiagnostico,clinica,socio,tipoconsulta,doctor,usuario,noconsulta)
    console.log(newExpediente.codigo_diagnostico);
    let response = await expediente.add(newExpediente)
    if (response){
      res.status(201).json(response);
    }else{
      res.status(402).end()
    }
  } catch (err) {
    res.status(401).end()
    next(err);
  }
}

//post();

module.exports.post = post;