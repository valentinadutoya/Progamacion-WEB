//¿Qué se imprimirá en la consola al ejecutar el siguiente código? y por que?
//rta: se imprimen numeros pq si
const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
};
//desestructuracion
const { weight = 70, height = 180 } = person;
console.log(weight, height);

//¿Qué se imprimirá en la consola al ejecutar el siguiente código? Y por que?

const persona = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
};

const { age: personAge } = persona;
console.log(age);
