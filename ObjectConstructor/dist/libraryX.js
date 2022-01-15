let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}; 

function render(books) {
    const container = document.querySelector('.container');

    container.innerHTML = "";

    books.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('card')

        const title = document.createElement('h3');
        title.classList.add('title');
        title.textContent = book.title;

        const author = getBookContent('author', book.author);
        const pages = getBookContent('pages', `pages: ${book.pages}`);
        const readStatus = getBookContent('readStatus', `status: ${book.readStatus}`);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '🗑️';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', (ev) => {
          card.remove();
        });

        const readButton = document.createElement('button');
        readButton.textContent = '📖';
        readButton.classList.add('readButton');
        readButton.addEventListener('click', (ev) => {
          if (readStatus.innerText === 'status: read') {
            readStatus.innerText = 'status: unread'
          } else {
            readStatus.innerText = 'status: read'
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
};

function getBookContent(className, text) {
    const content = document.createElement('p');
    content.classList.add(className);
    content.textContent = text;
return content;
};

const LOTR = new Book('The Lord of the Rings', 'J.R.R. Tolkien', '1137', 'read');
const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '310', 'read');
const harryPotter = new Book('Harry Potter and the Philosophers Stone', 'j. K. Rowling', '223', 'unread');

myLibrary.push(LOTR);
myLibrary.push(hobbit);
myLibrary.push(harryPotter);

render(myLibrary);

// Form Stuff below

const favDialog = document.getElementById('favDialog');
const updateButton = document.getElementById('updateLibrary');
const confirmBtn = document.getElementById('confirmBtn');
const form = document.getElementById('form');

updateButton.addEventListener('click', () => {
    if (typeof favDialog.showModal === "function") {
      favDialog.showModal();
    } else {
      alert("The <dialog> API is not supported by this browser");
    }
  });

const cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  favDialog.close();
});

function clearForm() {
  document.getElementById("form").reset();
};

form.addEventListener('submit', (ev) => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').value;

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
  render(myLibrary);

  clearForm();
});

