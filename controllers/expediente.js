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