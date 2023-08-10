const usuarios = [
  { nome: 'Max', sobrenome: 'Marcelino', idade: 29 },
  { nome: 'Jessica', sobrenome: 'Costa', idade: 27 },
  { nome: 'Alexsandra', sobrenome: 'Borges', idade: 51 },
];

const novoArra = usuarios.map((usuario) => {
  return { 
    nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`,
    idade:  usuario.idade
  }
});

console.log(novoArra);
console.log(usuarios);
