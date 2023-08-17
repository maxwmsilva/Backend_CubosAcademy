const professores = [
  {nome: "Max Willian", stack: "backend"},
  {nome: "Jessica costa", stack: "frontend"},
  {nome: "Marcelo lau", stack: "backend"}
]


const professoresBackend = professores.filter((professor) => {
  return professor.stack == 'backend';
});

console.log(professoresBackend);

const professorFrontend = professores.filter((professor)=>{
  return professor.stack == 'frontend';
});

console.log(professorFrontend);