const API_URL = "http://127.0.0.1:5000/books";

window.onload = loadBooks;

// Load Books
function loadBooks() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const table = document.querySelector("#booksTable tbody");
            table.innerHTML = "";

            data.forEach(book => {
                const row = `
                <tr>
                    <td>${book.id}</td>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.year}</td>
                    <td>
                        <button onclick="editBook(${book.id}, '${book.title}', '${book.author}', '${book.year}')" class="update-btn">Update</button>
                        <button onclick="deleteBook(${book.id})" class="delete-btn">Delete</button>
                    </td>
                </tr>`;
                table.innerHTML += row;
            });
        });
}

// Add Book
document.getElementById("bookForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const year = document.getElementById("year").value.trim();

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, year })
    })
    .then(res => res.json())
    .then(() => {
        showMessage("Book added successfully!");
        loadBooks();
        document.getElementById("bookForm").reset();
    })
    .catch(() => showMessage("Error adding book", "#e53935"));
});

// -------------- DELETE BOOK ------------------
function deleteBook(id) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(res => res.json())
        .then(() => {
            showMessage("Book deleted!");
            loadBooks();
        })
        .catch(() => showMessage("Error deleting book", "#e53935"));
}

// -------------- UPDATE BOOK ------------------
function editBook(id, oldTitle, oldAuthor, oldYear) {
    const title = prompt("Enter new title:", oldTitle);
    const author = prompt("Enter new author:", oldAuthor);
    const year = prompt("Enter new year:", oldYear);

    if (!title || !author || !year) return;

    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, year })
    })
    .then(res => res.json())
    .then(() => {
        showMessage("Book updated successfully!");
        loadBooks();
    })
    .catch(() => showMessage("Error updating book", "#e53935"));
}

// ---------------- MESSAGE BOX ----------------
function showMessage(msg, color = "#4caf50") {
    const box = document.getElementById("messageBox");
    box.textContent = msg;
    box.style.background = color;
    box.classList.remove("hidden");

    setTimeout(() => box.classList.add("show"), 10);

    setTimeout(() => {
        box.classList.remove("show");
        setTimeout(() => box.classList.add("hidden"), 300);
    }, 2000);
}
