// Test functionality
document.getElementById('test-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const answer = parseInt(document.getElementById('test-answer').value);
    const resultDiv = document.getElementById('test-results');
    
    if (answer === 4) {
        resultDiv.textContent = "Correct! You answered the question correctly.";
    } else {
        resultDiv.textContent = "Incorrect. The correct answer is 4.";
    }
});

// Notes functionality
document.getElementById('share-note').addEventListener('click', function() {
    const noteInput = document.getElementById('note-input');
    if (noteInput.value.trim() !== "") {
        fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ note: noteInput.value })
        })
        .then(response => response.json())
        .then(data => {
            noteInput.value = "";
            displayNotes(data.notes);
        });
    }
});

function displayNotes(notes) {
    const notesDiv = document.getElementById('notes-list');
    notesDiv.innerHTML = "";
    notes.forEach(note => {
        const noteItem = document.createElement('div');
        noteItem.textContent = note;
        notesDiv.appendChild(noteItem);
    });
}

// Doubt session functionality
document.getElementById('ask-doubt').addEventListener('click', function() {
    const doubtInput = document.getElementById('doubt-input');
    if (doubtInput.value.trim() !== "") {
        fetch('/api/doubts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ doubt: doubtInput.value })
        })
        .then(response => response.json())
        .then(data => {
            doubtInput.value = "";
            displayDoubts(data.doubts);
        });
    }
});

function displayDoubts(doubts) {
    const doubtDiv = document.getElementById('doubt-list');