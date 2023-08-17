const arquivos = ['callback.js', 'some.js', 'virus.js'];

const antiVirus = (arrayArquivos) => {
  const resultado = arrayArquivos.some((arquivo)=>{
    const existeExtensao = arquivo.indexOf('.bat'); //indexOf verifica se existe a palavra dentro da String
    
    return existeExtensao != -1;  
  });
  if (resultado){
    console.log('Virus detectado');
  }else{
    console.log('Nenhum virus detectado');
  }
}
return antiVirus(arquivos);