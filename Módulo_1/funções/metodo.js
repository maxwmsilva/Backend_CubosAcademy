const person= {
  nome: "Max",
  idade: 30,
  profissao: "Engenheiro",
  altura: 1.68,
  
  apresentar:function () {
    const faixaEtaria = this.determinarFaixaEtaria(this.idade);
    console.log(`Olá! Meu nome é ${this.nome}, sou um jovem de ${this.idade}  anos,sou ${faixaEtaria},
     ${this.altura}m de altura e sou ${this.profissao}`);
        
  },
  
  determinarFaixaEtaria: function () {
      if (this.idade <= 21) {
        return "jovem";
      } else if (this.idade < 66) {
        return "adulto";
      } else {
        return "idoso";
      }
    }

    
  }

person.apresentar();
console.log(`sou ${person.determinarFaixaEtaria()}`);

//tras do console.log

/*const console = {
  num_de_caracteres: 40,
  log: function (texto) {
    //codigo aqui
    }
}
console.log("Texto para imprimir");
*/

