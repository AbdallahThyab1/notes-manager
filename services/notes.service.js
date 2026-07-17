// =====================================
// Node.js Modules
// =====================================

import * as fs from "node:fs/promises";

// =====================================
// Configuration
// =====================================
const filePath = "./data/notes.json";


// =====================================
// Get All Notes
// Read all notes from the storage file.
// =====================================
export async function getAllNotes() {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
}

// =====================================
// Save Notes
// Persist the notes array to the storage file.
// =====================================
export async function saveNotes(notes) {
    await fs.writeFile(filePath, JSON.stringify(notes, null, 2));
}

// =====================================
// Add Note
// Create a new note and save it.
// =====================================
export async function addNote(title, content) {
    const notes = await getAllNotes();

    const newNote = {
        id: Date.now(),
        title,
        content,
        createdAt: new Date().toISOString()
    };

    notes.push(newNote);
    await saveNotes(notes);

    return newNote;
}

// =====================================
// Delete Note
// Remove a note by its ID.
// =====================================
export async function deleteNote(id) {
    const notes = await getAllNotes();

    const note = notes.find(note => note.id === id);

    if (!note) {
        return null;
    }

    const filteredNotes = notes.filter(note => note.id !== id);

    await saveNotes(filteredNotes);

    return note;
}

// =====================================
// Update Note
// Update an existing note by its ID.
// =====================================
export async function updateNote(id, title, content) {
    const notes = await getAllNotes();

    const note = notes.find(note => note.id === id);

    if (!note) {
        return null;
    }

    note.title = title;
    note.content = content;

    await saveNotes(notes);

    return note;
}

// =====================================
// Search Note
// Find a note by its title or ID.
// =====================================
export async function searchNote(keyword) {
    const notes = await getAllNotes();

    return notes.find(note =>
        note.title === keyword || note.id === Number(keyword)
    );
}