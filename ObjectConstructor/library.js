var myLibrary = [];
var Book = /** @class */ (function () {
    function Book(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
    ;
    return Book;
}());
;
function render(books) {
    var container = document.querySelector('.container');
    container.innerHTML = "";
    books.forEach(function (book) {
        var card = document.createElement('div');
        card.classList.add('card');
        var title = document.createElement('h3');
        title.classList.add('title');
        title.textContent = book.title;
        var author = getBookContent('author', book.author);
        var pages = getBookContent('pages', "pages: " + book.pages);
        var readStatus = getBookContent('readStatus', "status: " + book.readStatus);
        var deleteButton = document.createElement('button');
        deleteButton.textContent = '🗑️';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', function (ev) {
            card.remove();
        });
        var readButton = document.createElement('button');
        readButton.textContent = '📖';
        readButton.classList.add('readButton');
        readButton.addEventListener('click', function (ev) {
            if (readStatus.innerText === 'status: read') {
                readStatus.innerText = 'status: unread';
            }
            else {
                readStatus.innerText = 'status: read';
            }
        });
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readStatus);
        card.appendChild(deleteButton);
        card.appendChild(readButton);
        container.appendChild(card);
    });
}
;
function getBookContent(className, text) {
    var content = document.createElement('p');
    content.classList.add(className);
    content.textContent = text;
    return content;
}
;
var LOTR = new Book('The Lord of the Rings', 'J.R.R. Tolkien', '1137', 'read');
var hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '310', 'read');
var harryPotter = new Book('Harry Potter and the Philosophers Stone', 'j. K. Rowling', '223', 'unread');
myLibrary.push(LOTR);
myLibrary.push(hobbit);
myLibrary.push(harryPotter);
render(myLibrary);
// Form Stuff below
var favDialog = document.getElementById('favDialog');
var updateButton = document.getElementById('updateLibrary');
var confirmBtn = document.getElementById('confirmBtn');
var form = document.getElementById('form');
var title = document.getElementById('title');
var author = document.getElementById('author');
var pages = document.getElementById('pages');
var read = document.getElementById('read');
updateButton.addEventListener('click', function () {
    if (typeof favDialog.showModal === "function") {
        favDialog.showModal();
    }
    else {
        alert("The <dialog> API is not supported by this browser");
    }
});
var cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click', function (ev) {
    ev.preventDefault();
    favDialog.close();
});
function clearForm() {
    form.reset();
}
;
form.addEventListener('submit', function (ev) {
    var newBook = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(newBook);
    render(myLibrary);
    clearForm();
});
