const chalk = require('chalk')
const fs = require('fs')



//add
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if(!duplicateNote){
        
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(chalk.bgGreen('new note added!'))    
    }
    else{
        console.log(chalk.bgRed('note title raken!'))
    }
}


//remove
const removeNote = (title) => {
    const notes = loadNotes()

    const newNotes = notes.filter((note) => note.title !== title)

    if(newNotes.length !== notes.length){
        console.log(chalk.bgGreen('note removed!'))
        saveNotes(newNotes)
    }else {
        console.log(chalk.bgRed('no note found!'))
    }
}

//list
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.bgMagenta('Your notes:'))
    notes.forEach(note => {
        console.log(note.title)
    })

}

//read
const readNote = (title) => {
    const notes = loadNotes()

   const foundNote =  notes.find((note) => note.title === title)

   if(foundNote){
       console.log(chalk.bgMagenta(foundNote.title))
       console.log(foundNote.body)
   }
   else{
       console.log(chalk.bgRed('No note found!'))
   }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
} catch (e) {
    return []
}   
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
