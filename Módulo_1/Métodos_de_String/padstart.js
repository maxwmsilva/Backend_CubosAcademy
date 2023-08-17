//serve para preencher a string com algum caracter para a string atingir o tamanho lenght

const ultimos4dig = " 2345";

const numCatao =  ultimos4dig.padStart(8, "******") //vai imprimir a qtd certa para preencher as casas.
console.log(numCatao);