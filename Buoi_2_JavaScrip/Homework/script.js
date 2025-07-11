// ===================== DOM Elements =====================
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const filterBtns = document.querySelectorAll(".filters button");

const noteInput = document.getElementById("note-input");
const addNoteBtn = document.getElementById("add-note");
const notesContainer = document.getElementById("notes-container");

const themeToggle = document.getElementById("theme-toggle");
const clock = document.getElementById("clock");
const greeting = document.getElementById("greeting");

const noteColors = ["#FFD700", "#90EE90", "#ADD8E6", "#FFA07A", "#FFB6C1"];

// ===================== Clock & Greeting =====================
function updateClockAndGreeting() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();

    const hour = now.getHours();
    if (hour < 12) greeting.textContent = "☀️ Good morning";
    else if (hour < 18) greeting.textContent = "🌤️ Good afternoon";
    else greeting.textContent = "🌙 Good evening";
}
setInterval(updateClockAndGreeting, 1000);
updateClockAndGreeting();

// ===================== Local Storage =====================
function saveTasks() {
    const tasks = Array.from(taskList.children).map(li => ({
        text: li.querySelector("span").textContent,
        completed: li.classList.contains("completed")
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function saveNotes() {
    const notes = Array.from(notesContainer.children).map(note => ({
        text: note.querySelector(".note-content").textContent,
        color: note.style.backgroundColor
    }));
    localStorage.setItem("notes", JSON.stringify(notes));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(({ text, completed }) => createTask(text, completed));
}

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(({ text, color }) => createNote(text, color));
}

// ===================== Task Functions =====================
function createTask(text, completed = false) {
    const li = document.createElement("li");
    li.setAttribute("draggable", true);
    if (completed) li.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed");
        saveTasks();
    });

    const span = document.createElement("span");
    span.textContent = text;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
        const newText = prompt("Edit task:", span.textContent);
        if (newText) {
            span.textContent = newText.trim();
            saveTasks();
        }
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
        li.remove();
        saveTasks();
    });

    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";
    editBtn.className = "edit-btn";
    delBtn.className = "del-btn";
    btnGroup.append(editBtn, delBtn);

    li.append(checkbox, span, btnGroup);

    taskList.appendChild(li);
    enableDragDrop(taskList, saveTasks);
}

// ===================== Note Functions =====================
function createNote(text, color = randomColor()) {
    const note = document.createElement("div");
    note.className = "note";
    note.setAttribute("draggable", true);
    note.style.backgroundColor = color;

    const span = document.createElement("span");
    span.className = "note-content";
    span.textContent = text;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
        const newText = prompt("Edit note:", span.textContent);
        if (newText) {
            span.textContent = newText.trim();
            saveNotes();
        }
    });

    const delBtn = document.createElement("button");
    delBtn.className = "delete-note";
    delBtn.textContent = "×";
    delBtn.addEventListener("click", () => {
        note.remove();
        saveNotes();
    });

    note.append(span, editBtn, delBtn);
    notesContainer.appendChild(note);
    enableDragDrop(notesContainer, saveNotes);
}

function randomColor() {
    return noteColors[Math.floor(Math.random() * noteColors.length)];
}

// ===================== Drag & Drop =====================
function enableDragDrop(container, saveCallback) {
    let dragged;

    container.querySelectorAll("[draggable]").forEach(item => {
        item.ondragstart = () => dragged = item;

        item.ondragover = e => {
            e.preventDefault();
            item.style.borderTop = "2px dashed #aaa";
        };

        item.ondragleave = () => {
            item.style.borderTop = "none";
        };

        item.ondrop = () => {
            item.style.borderTop = "none";
            if (dragged !== item) {
                container.insertBefore(dragged, item);
                saveCallback();
            }
        };
    });
}

// ===================== Events =====================
addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (!text) return alert("Please enter a task.");
    createTask(text);
    taskInput.value = "";
    saveTasks();
});

addNoteBtn.addEventListener("click", () => {
    const text = noteInput.value.trim();
    if (!text) return alert("Please enter a note.");
    createNote(text);
    noteInput.value = "";
    saveNotes();
});

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        Array.from(taskList.children).forEach(task => {
            const isDone = task.classList.contains("completed");
            task.style.display =
                filter === "all" ||
                    (filter === "completed" && isDone) ||
                    (filter === "incomplete" && !isDone)
                    ? "flex"
                    : "none";
        });
    });
});

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// ===================== Init =====================
loadTasks();
loadNotes();
