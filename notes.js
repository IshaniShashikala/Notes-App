const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')    

const addNotes = (title, body) =>{
    const notes = loadsNotes()
    // const duplicateNotes = notes.filter((note)=> note.title === title) //this function is called once for a each code
        // if false --> empty
        //false - add new note
        //true - duplicate note - leaving dulicateArray empty

    const duplicateNote = notes.find((note) => note.title === title)

    debugger
        
    // if(duplicateNotes.length === 0){
    if(!duplicateNote){    
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)            // takes "notes" array or object
        console.log(chalk.green.inverse('new note added'))
    } else{
        console.log(chalk.red.inverse('note title taken'))
    }
    // console.log(notes)   
}

const removeNote = (title)=>{
    const notes = loadsNotes ()
    const notesToKeep = notes.filter((note)=> note.title !== title ) // if true => keep
    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('no note found'))
    }   
}

const listNotes = ()=>{
    const notes = loadsNotes()

    console.log(chalk.bold.red('Your notes' ))

    notes.forEach((note) => {
        console.log( note.title)  
    });   
}

const readNote = (title) =>{
    const notes = loadsNotes()
    const note = notes.find((note)=> note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.inverse.red('Note is not found'))
    }
}

const saveNotes =  (notes)=> {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadsNotes = ()=>{
     try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch (e) {
        return []
    }  
}


// module.exports = getNotes
module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote:readNote
}