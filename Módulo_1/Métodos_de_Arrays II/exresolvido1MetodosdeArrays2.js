const usuarios = [
  {nome: 'Max', idade: 17},
  {nome: 'Jessica', idade: 27},
  {nome: 'Bel', idade: 49},
  {nome: 'Airton', idade: 63},
];

//usaremos every porque testa todos os elementos do array e retorna boolean
const fiscalizarFesta = (arrayObjetos) => {
  const resultado = arrayObjetos.every((objeto) =>{
    return objeto.idade > 17;

  });
  if (resultado){
    console.log('Festa liberada');

  }else{
    console.log('Pessui menor de idade, ${usuarios.nome}');

  }
}
fiscalizarFesta(usuarios);
