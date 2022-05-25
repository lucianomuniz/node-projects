const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
  console.log(chalk.inverse('Your notes:'));
  const notes = loadNotes();
  notes.forEach((note, index) =>
    console.log(`${index + 1}) title: ${note.title}`)
  );
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicatedNote = notes.find((note) => note.title === title);

  if (duplicatedNote) {
    console.log(chalk.red.inverse('Note title already taken!'));
    return;
  }

  notes.push({
    title: title,
    body: body,
  });
  saveNotes(notes);
  console.log(chalk.green.inverse('New note added!'));
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title !== title);

  if (newNotes.length == notes.length) {
    console.log(chalk.red.inverse('Note not found!'));
    return;
  }

  saveNotes(newNotes);
  console.log(chalk.green.inverse('Note removed!'));
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote,
  listNotes,
  removeNote,
};
