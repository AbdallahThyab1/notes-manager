// =====================================
// Node.js Modules
// =====================================
import { Command } from "commander";
import Inquirer from "inquirer";

// =====================================
// Application Services
// =====================================
import * as notesService from "./services/notes.service.js";

// =====================================
// CLI Configuration
// =====================================
const program = new Command();

// =====================================
// Add Note Command
// =====================================
program
    .command("add")
    .description("Add a new note")
    .action(async () => {
        const answers = await Inquirer.prompt([
            { type: "input", name: "title", message: "Enter note title:" },
            { type: "input", name: "content", message: "Enter note content:" }
        ]);

        const note = await notesService.addNote(
            answers.title,
            answers.content
        );

        console.log("Note added successfully!");
        console.log(note);
    });

// =====================================
// List Notes Command
// =====================================
program
    .command("list")
    .description("Show all notes")
    .action(async () => {
        const notes = await notesService.getAllNotes();

        if (notes.length === 0) {
            console.log("No notes found.");
            return;
        }

        notes.forEach(note => {
            console.log("----------------------------");
            console.log(`ID      : ${note.id}`);
            console.log(`Title   : ${note.title}`);
            console.log(`Content : ${note.content}`);
            console.log(`Created : ${note.createdAt}`);
        });
    });

// =====================================
// Delete Note Command
// =====================================
program
    .command("delete")
    .description("Delete note")
    .action(async () => {
        const answer = await Inquirer.prompt([
            { type: "number", name: "id", message: "Enter note id:" }
        ]);

        const note = await notesService.deleteNote(answer.id);

        if (!note) {
            console.log("No note found.");
            return;
        }

        console.log("Note deleted successfully!");
        console.log(note);
    });

// =====================================
// Update Note Command
// =====================================
program
    .command("update")
    .description("Update note")
    .action(async () => {
        const answers = await Inquirer.prompt([
            { type: "number", name: "id", message: "Enter note id:" },
            { type: "input", name: "title", message: "Enter note title:" },
            { type: "input", name: "content", message: "Enter note content:" }
        ]);

        const note = await notesService.updateNote(
            answers.id,
            answers.title,
            answers.content
        );

        if (!note) {
            console.log("No note found.");
            return;
        }

        console.log("Note updated successfully!");
        console.log(note);
    });

// =====================================
// Search Note Command
// =====================================
program
    .command("search")
    .description("Search note")
    .action(async () => {
        const answers = await Inquirer.prompt([
            { type: "input", name: "keyword", message: "Enter note title or id:" }
        ]);

        const note = await notesService.searchNote(answers.keyword);

        if (!note) {
            console.log("No note found.");
            return;
        }

        console.log("Note found!");
        console.log(note);
    });

// =====================================
// Start CLI Application
// =====================================
program.parse();