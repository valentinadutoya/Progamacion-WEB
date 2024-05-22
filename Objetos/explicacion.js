const persona = {
  //clave y valor
  name: "valentina",
  lastName: "dutoya",
  isWorking: true,
  age: "17",
  cats: [""],
  walk: () => {
    return "hola";
  },
};

console.log(persona, age);
console.log(persona["name"]);
persona.pepito = "pepito";
delete persona.age;

console.log(persona);
