const { default: chalk } = require('chalk');
const yargs = require('yargs');
const { listNotes, addNote, removeNote, readNote } = require('./notes.js');

//Customize yargs
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      description: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      description: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('Reading a note');
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      description: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    listNotes();
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      description: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    readNote(argv.title);
  },
});

yargs.parse();
