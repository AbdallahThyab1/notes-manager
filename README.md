# 📝 Notes Manager - Command Line Notes Management System

> **A simple and interactive notes management application built with Node.js**
> *Manage your notes directly from the terminal using an interactive CLI.*

![Node.js](https://img.shields.io/badge/Node.js-ESModules-339933?style=for-the-badge\&logo=node.js)
![Commander.js](https://img.shields.io/badge/Commander.js-CLI-blue?style=for-the-badge)
![Inquirer.js](https://img.shields.io/badge/Inquirer.js-Interactive-green?style=for-the-badge)

---

## 📌 Overview

Notes Manager is a command-line application that allows users to create, update, delete, search, and manage notes through an interactive terminal interface.

* **Problem solved:** Provides a lightweight way to manage notes without using a graphical application.
* **Built for:** Developers learning Node.js, File System operations, and CLI application development.
* **What makes it different:** Uses modern Node.js features with a clean project structure and JSON-based persistent storage.

---

## ✨ Features

* ✅ **Add Notes** — Create new notes interactively.
* ✅ **View Notes** — Display all saved notes.
* ✅ **Update Notes** — Modify existing notes.
* ✅ **Delete Notes** — Remove notes by ID.
* ✅ **Search Notes** — Search notes by title or ID.
* ✅ **Persistent Storage** — Save data inside a JSON file.
* ✅ **Interactive CLI** — User-friendly prompts powered by Inquirer.

---

## 📱 Core Functionality

| Module           | File                        | Description                                 |
| ---------------- | --------------------------- | ------------------------------------------- |
| 🖥 CLI Commands  | `index.js`                  | Defines all CLI commands using Commander.js |
| 📝 Notes Service | `services/notes.service.js` | Handles all business logic                  |
| 💾 Data Storage  | `data/notes.json`           | Stores application data                     |
| 📦 Configuration | `package.json`              | Project configuration and dependencies      |

---

## 🏗️ Architecture & Technical Decisions

### Project Structure

```text
NotesManager/
├── data/
│   └── notes.json
│
├── services/
│   └── notes.service.js
│
├── index.js
├── package.json
└── README.md
```

### Key Technical Decisions

**Why Commander.js?**

> Commander.js provides a clean and scalable way to define CLI commands and organize application entry points.

**Why Inquirer.js?**

> Instead of requiring long command-line arguments, Inquirer offers an interactive user experience with simple prompts.

**Why JSON for storage?**

> JSON is lightweight, human-readable, and perfect for small applications that do not require a database.

**Why separate the Service layer?**

> Business logic is isolated from the CLI, making the project easier to maintain and extend.

---

## 🛠️ Tech Stack

| Layer       | Technology              | Why                          |
| ----------- | ----------------------- | ---------------------------- |
| Runtime     | Node.js                 | JavaScript runtime           |
| Language    | JavaScript (ES Modules) | Modern JavaScript support    |
| CLI         | Commander.js            | Command management           |
| User Input  | Inquirer.js             | Interactive prompts          |
| Storage     | JSON                    | Lightweight data persistence |
| File System | fs/promises             | Asynchronous file operations |

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/AbdallahThyab1/notes-manager.git
```

Navigate into the project

```bash
cd notes-manager
```

Install dependencies

```bash
npm install
```

---

## ▶️ Usage

### Add a Note

```bash
node index.js add
```

### List Notes

```bash
node index.js list
```

### Update a Note

```bash
node index.js update
```

### Delete a Note

```bash
node index.js delete
```

### Search for a Note

```bash
node index.js search
```

---

## 🚧 Challenges & How I Solved Them

### Challenge 1: Persistent Data Storage

**Problem:** Notes should remain available after the application closes.

**Solution:** Stored all notes inside a JSON file using Node.js File System API.

**Result:** Data persists between application runs.

---

### Challenge 2: Organizing the Project

**Problem:** Mixing CLI logic with application logic makes the code harder to maintain.

**Solution:** Separated the project into a CLI layer and a service layer.

**Result:** Cleaner code with better separation of responsibilities.

---

### Challenge 3: Interactive User Experience

**Problem:** Passing arguments manually can become inconvenient.

**Solution:** Used Inquirer.js to collect user input through interactive prompts.

**Result:** Easier and more user-friendly terminal experience.

---

## 📈 What I Learned

* Building CLI applications with Commander.js
* Creating interactive prompts with Inquirer.js
* Working with the File System API (`fs/promises`)
* Reading and writing JSON files
* Using asynchronous programming with Async/Await
* Separating business logic from the presentation layer
* Organizing Node.js projects into reusable modules

---

## 🗺️ Roadmap

* [x] Add notes
* [x] List notes
* [x] Update notes
* [x] Delete notes
* [x] Search notes
* [ ] Input validation
* [ ] Better error handling
* [ ] Colored terminal output
* [ ] Export notes
* [ ] Database integration

---

## 📞 Contact

**Abdallah Thyab** - Computer Engineering Student

* 📧 Email: [1abdallahthyab@gmail.com](mailto:1abdallahthyab@gmail.com)
* 💼 LinkedIn: https://www.linkedin.com/in/abdallah-thyab-dev/
* 🐙 GitHub: https://github.com/AbdallahThyab1

---

## 📄 License

This project is licensed under the **MIT License**.
