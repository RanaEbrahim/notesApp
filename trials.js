//object
const person={
    name:"Rana",
    age:"25"
}

//object to json
const personJson=JSON.stringify(person)
console.log(personJson)

//store it in file
const fs=require('fs')
fs.writeFileSync('jsonfile.json',personJson)

//read file in json
const x= fs.readFileSync('jsonfile.json').toString()
console.log(x)

//convert to object
const personObject=JSON.parse(personJson)
console.log(personObject)

personObject.name='Aml'
const personJson2=JSON.stringify(personObject)
console.log(personJson2)

// const y= fs.writeFileSync('jsonfile.json',person,personJson2)
// console.log(y)
