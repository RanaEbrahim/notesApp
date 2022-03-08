// const fs= require('fs')
// fs.writeFileSync('notes.txt','Hello')
// console.log(fs.readFileSync('notes.txt').toString())

// const x= require('./data')
// console.log(x.sum(5,5))

////////////////////////
// const validator=require('validator')
// console.log(validator.isEmail('rana@gmail.com'))

const yargs=require('yargs')

//add
yargs.command({
    command:'add',
    describe:'add note',
    handler:()=>{
        console.log('add notes')
    }
})

//delete
yargs.command({
    command:'delete',
    describe:'delete note',
    builder:{
        title:{
            describe:'this is the title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'this is the body',
            demandOption:true,
            type:'string'
        }
    },
    handler:()=>{
        console.log('delete notes')
    }
})


//list
yargs.command({
    command:'list',
    describe:'list note',
    handler:()=>{
        console.log('list notes')
    }
})

//read
yargs.command({
    command:'read',
    describe:'read note',
    builder:{
        title:{
            describe:'this is the title',
            demandOption:true,
            type:'string'
        }
    },
    handler:()=>{
        console.log('read notes')
    }
})
console.log(yargs.argv)