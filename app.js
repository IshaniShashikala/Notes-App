const yargs = require('yargs')
const chalk = require('chalk')
const validator = require('validator')
const notes = require('./notes.js')
const { describe, demandOption, argv } = require('yargs')

//const message = getNotes()
// console.log(getNotes())

// console.log(validator.isURL('http//mead.io'))
// const greenMsg = chalk.bold.inverse.red('error')
// console.log(greenMsg)

    //yargs
// console.log(process.argv)


    //customize yargs version
 yargs.version('1.2.0')

//  create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'test ',
            demandOption: true,
            type: 'string'
          }  
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
        // console.log('Title: ' + argv.title) //2
        // console.log('Body: ' + argv.body)      
        // console.log('Adding a new note',argv) //1
    }
})
// remove a note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demmandOption: true,
            type: 'string'    
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
        //console.log('Remove a note')
    }
})

// list a note
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler(){
        notes.listNotes()
    }
})

//read a note
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()
// console.log(yargs.argv)

//  add,remove,read,list

    // user input
// const command = process.argv[2]
// console.log(process.argv)

// if (command === 'add'){
//     console.log('add notes')
// } else if (command === 'remove'){
//     console.log('remove notes')
// }

    //chalk
// console.log(chalk.bold('success'))
// console.log(chalk.inverse('success'))

// const add = require('./utils.js')
// const name = 'Ishani'
// const sum = add (4, -2)
// console.log(sum)

// const fs = require('fs')
// fs.writeFileSync('notes.text','My name is Ishani. ')
// fs.appendFileSync('notes.text','I live in Sri Lanka.')

