const nome1 = 'jose';
const nome2 = 'joao';
const nome3 = 'maria';

const nomeDeEstudantes = ['Jose', 'Joao', 'Maria', 'Andre'];
const x=3;
console.log("Tamanho " + nomeDeEstudantes.length);

nomeDeEstudantes[nomeDeEstudantes.length] = 'jessica';
nomeDeEstudantes[0] = 'Max';
nomeDeEstudantes.push('Paulo');//adiciona item no array
console.log("Tamanho " + nomeDeEstudantes.length);
nomeDeEstudantes.pop(); 
console.log("Tamanho " + nomeDeEstudantes.length);
nomeDeEstudantes.pop(); //retira o ultimo itemdo array
nomeDeEstudantes.pop();
nomeDeEstudantes.pop();
console.log("Tamanho " + nomeDeEstudantes.length);

console.log(nomeDeEstudantes[0]); //dentro do colchete coloca o index.
console.log(nomeDeEstudantes[1]); //dentro do colchete coloca o index.
console.log(nomeDeEstudantes[2]); //dentro do colchete coloca o index.
console.log(nomeDeEstudantes[x]); //dentro do colchete coloca o index.
console.log(nomeDeEstudantes[4]); //dentro do colchete coloca o index.
console.log(nomeDeEstudantes[5]); //dentro do colchete coloca o index.
console.log(nomeDeEstudantes); //dentro do colchete coloca o index.

nomeDeEstudantes.shift(); //remove primeiro elemento 
console.log(nomeDeEstudantes);
nomeDeEstudantes.unshift('InserindoMax');
console.log(nomeDeEstudantes);
