const validarSenha = (req, res, next) => {
  const { senha } = req.query;
  if (!senha){
    return res.send("Você precisa passar a senha");
  }
  if(senha != 'carros123'){
    return res.send("A senha está incorreta");
  }
  //se tudo ok, next
  next();
}
module.exports = {
  validarSenha
};