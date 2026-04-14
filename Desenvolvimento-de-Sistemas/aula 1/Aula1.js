// show databases




use ("aulaDS")

// db.people.insertOne({
//     name: "Gabriel",
//     age: 15
// })


// db.people.insertMany([
    
//     {name: "joao", age: 30},
//     {name: "Maria", age: 17},
//     {name: "mario", age: 517}

// ])

// const pessoas = [
    
//     {name: "joao", age: 30},
//     {name: "Maria", age: 17},
//     {name: "mario", age: 517}

// ]

// db.people.insertMany(pessoas)

// db.peopçe.find({name: "maria"})

// db.people.find({$and: [{name: "Maria"}, {age: 17}]})


// db.people.find({ age: { $gt: 29 } })


// $eq - Corresponde a valores que são iguais a um valor especificado.

// $gt - Corresponde a valores maiores que um valor especificado.

// $gte - Corresponde a valores maiores ou iguais a um valor especificado.

// $in - Corresponde a qualquer um dos valores especificados em uma matriz.

// $lt - Corresponde a valores que são menores que um valor especificado.

// $lte - Corresponde a valores menores ou iguais a um valor especificado.

// $ne - Corresponde a todos os valores que não são iguais a um valor especificado.

// $nin - Não corresponde a nenhum dos valores especificados em uma matriz


db.people.find({name: "Gabriel Kloster"})



// db.people.find({name: "Gabriel Kloster"})

// db.people.update(
//     {_id: ObjectId('69c192513db6144847fa4294')},
//     {$set: {name: "Gabriel Kloster"}}
// )

// db.people.deleteOne({
//     name: "Gabriel Kloster"
// })
