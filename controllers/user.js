const user = require('../db_apis/user.js');


async function get(req, res, next) {
  try {

    const context = {};
    //context.id = req.params.id//nuevo
    let id = req.body.id;
    console.log(id)
    const rows = await user.find(id);

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

//Metodo post para usuario

function getUserFromRec(req) {
  const user = {
    usuario: req.body.usuario,
    password: req.body.password,
  };

  return user;
}

async function post(req, res, next) {
  try {
        console.log(req.body);
        
        let objUsuario = getUserFromRec(req);
        //console.log(objUsuario.usuario);
        //console.log(objUsuario.password);
        let id = objUsuario.usuario;
        //console.log(id);
        let credentialsToUser = {};
        credentialsToUser = await user.find(id)
        if (credentialsToUser){
        console.log(credentialsToUser.USUARIO);
        console.log(credentialsToUser.PASSWORD);
        console.log(credentialsToUser.SITUACION);
        if (credentialsToUser.USUARIO === objUsuario.usuario && credentialsToUser.PASSWORD === objUsuario.password 
          && credentialsToUser.SITUACION === 'ACTIVO'){
          res.status(201).json(user);
        } else {
          res.status(403).end()
        }
      }else{
        res.status(404).end();
      }
  } catch (err) {
    res.status(401).end()
    next(err);
  }
}

module.exports.post = post;