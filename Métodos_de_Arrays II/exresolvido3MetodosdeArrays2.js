const carros = [
  { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' }

];

const buscarCarro = (marca, arrayCarros) => {
  const resultado = arrayCarros.find((carro) => {
    return carro.marca === marca;

  });
  console.log(resultado);
}
buscarCarro('toyota', carros);
