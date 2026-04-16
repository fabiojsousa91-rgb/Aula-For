/* 

    foreach(item, index, array)


*/

const users = [
      { name: "Rodolfo", age: 33, contact: "(19) 93443-3434" },
      { name: "Paulo", age: 21, contact: "(12) 93443-0215" },
      { name: "Aline", age: 40, contact: "(13) 93443-1245" },
      { name: "Maria", age: 12, contact: "(14) 93443-4747" },
]

users.forEach(function(item, index){
    console.log(`${index + 1}), Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.contact}`);

});