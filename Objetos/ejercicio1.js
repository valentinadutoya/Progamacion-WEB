function createObject(name, subs) {
  const persona = {
    name: name,
    suscribres: subs,
    hash: name.length * subs,
    getStatus: () => {
      return `El canal ${name} tiene ${subs} subscriptores`;
    },
  };
  return persona;
}
const persona = createObject("abril", 250);

console.log(persona.name);
console.log(persona.suscribres);
console.log(persona.hash);
