const professores= require ('../bancoDeDados');

const filtrarProfessores = (req, resp) => {
  //console.log(req.query); //armazena como parametro de consulta na URL .... http://localhost:3001/professores/?nome=Guido Cerqueira&stack=Backend
  const { stack } = req.query //http://localhost:3001/professores?stack=Backend
  let resultado = professores;
  console.log(`cheguei no controlador de listagem do professor`);

  if(stack){
    resultado = professores.filter((professor) => {
      return professor.stack == stack
    });
  }
  resp.send(resultado);
};
const encontrarProfessor = (req, resp) => {
  console.log(`Rota para encontrar um professor`);
  const professorEcontrado = professores.find((professor) => {
    return professor.id == Number(req.params.id)
  });
  resp.send(professorEcontrado);
};

//exportando para o index.js
module.exports={
  filtrarProfessores,
  encontrarProfessor
}