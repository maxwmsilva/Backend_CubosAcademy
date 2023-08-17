//saber se um email é valido 
//tem que terum pelo menos um @
//tem que ter pelo menos um ponto depois do @.

const possivelEmail = "max.will.94@hotmail.com";
const indexArroba = possivelEmail.indexOf("@");
const indexPonto = possivelEmail.indexOf(".", indexArroba);


if(indexPonto > indexArroba){
  console.log("Email atende as requisições");
}else {
  console.log("Não há nenhum ponto após o arroba");

}
