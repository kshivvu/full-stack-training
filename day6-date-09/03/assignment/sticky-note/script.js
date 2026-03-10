let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes(){
    localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes(){

    const container = document.getElementById("notes");
    container.innerHTML = "";

    notes.forEach((note, index) => {

        const div = document.createElement("div");
        div.className = "note";

        div.innerHTML = `
        <textarea onchange="editNote(${index}, this.value)">${note}</textarea>
        <button onclick="deleteNote(${index})">Delete</button>
        `;

        container.appendChild(div);

    });

}

function addNote(){

    const input = document.getElementById("noteInput");
    
    notes.push(input.value);

    input.value = "";

    saveNotes();
    renderNotes();
}

function editNote(index, value){
    
    notes[index] = value;

    saveNotes();
}

function deleteNote(index){

    notes.splice(index,1);

    saveNotes();
    renderNotes();
}

renderNotes();