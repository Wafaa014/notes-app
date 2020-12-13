const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


//add
yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        }, 
        body: {
            describe: "note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//remove
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//list
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler(){
        notes.listNotes()
    }
})

//read
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
