//splice altera o conteudo de uma lista, removendo zero ou mais itens de um array, num determinado íncide

const lista = ["a","b","c","d","e"];
lista.splice(1,2,"f");
console.log(lista);
//[ 'a', 'f', 'd', 'e' ]


array = ["a","b","c","d","e"];
array.splice(1,2,"f","g","h");
console.log(array);
//[ 'a', 'f', 'g', 'h', 'd', 'e' ]


//array.push("f")
array = ["a","b","c","d","e"];
array.splice(array.length1, 0,"f");
console.log(array);


//array.pop  - adiciona no ultimo indice
array = ["a","b","c","d","e"];
array.splice(array.length1, -1, 1);
console.log(array);


//array.shift() //remove o primeiro item do array
array = ["a","b","c","d","e"];
array.splice(0, 1);
console.log(array);



//array.unshift("f")
array = ["a","b","c","d","e"];
array.splice(0, 0, "f");
console.log(array);


