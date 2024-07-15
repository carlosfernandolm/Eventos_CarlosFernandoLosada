let notes = [

];
let idGlobal = 2;

const notesContainer = document.getElementById('notesContainer');
const noteTitleInput = document.getElementById('noteTitle');
const noteTextInput = document.getElementById('noteText');
const saveNoteButton = document.getElementById('saveNote');
const clearFieldsButton = document.getElementById('clearFields');
const searchTextInput = document.getElementById('searchText');
const filterCompletedCheckbox = document.getElementById('filterCompleted');

function renderNotes(filteredNotes = notes) {
    notesContainer.innerHTML = '';
    if (filteredNotes.length === 0) {
        notesContainer.innerHTML = '<p>No hay notas para mostrar</p>';
    } else {
        filteredNotes.forEach(note => {
            const noteCard = document.createElement('div');
            noteCard.className = 'note-card';
            noteCard.innerHTML = `
                <div>
                    <h3>${note.title}</h3>
                    <p>${note.text}</p>
                </div>
                <div>
                    <input onClick="toggleNoteCompleted(${note.id})" type="checkbox" ${note.realizada ? "checked" : ""}>
                    <button onClick="deleteNote(${note.id})">Borrar Nota</button>
                </div>
            `;
            notesContainer.appendChild(noteCard);
        });
    }
}

function addNote(title, text) {
    idGlobal++;
    const newNote = { id: idGlobal, title, text, realizada: false };
    notes.push(newNote);
    renderNotes();
}

function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    renderNotes();
}

function toggleNoteCompleted(id) {
    const note = notes.find(note => note.id === id);
    note.realizada = !note.realizada;
    renderNotes();
}

function filterNotesByCompleted(notes) {
    return notes.filter(note => note.realizada);
}

function filterNotesByText(notes, text) {
    if (!text) return notes;
    return notes.filter(note => note.title.includes(text) || note.text.includes(text));
}

function applyFilters() {
    let filteredNotes = notes;
    if (filterCompletedCheckbox.checked) {
        filteredNotes = filterNotesByCompleted(filteredNotes);
    }
    const searchText = searchTextInput.value;
    filteredNotes = filterNotesByText(filteredNotes, searchText);
    renderNotes(filteredNotes);
}

saveNoteButton.addEventListener('click', () => {
    const title = noteTitleInput.value;
    const text = noteTextInput.value;
    if (title && text) {
        addNote(title, text);
        noteTitleInput.value = '';
        noteTextInput.value = '';
    }
});

clearFieldsButton.addEventListener('click', () => {
    noteTitleInput.value = '';
    noteTextInput.value = '';
});

searchTextInput.addEventListener('input', applyFilters);
filterCompletedCheckbox.addEventListener('change', applyFilters);

renderNotes();
