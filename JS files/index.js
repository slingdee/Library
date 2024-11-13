const newBookBtn = document.getElementById("new-book-btn");
const form = document.querySelector("form");

const library = [];

function Book (title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function (){
  this.read = !this.read;
}

function toggleRead(index){
  library[index].toggleRead();
  displayBooks();
}

function removeBook(index){
  library.splice(index, 1)
  displayBooks();
}

const myLibrary = document.getElementById("myLibrary");

function displayBooks(){
  
  myLibrary.innerHTML = "";
  for(let i = 0; i < library.length; i++){
    let book = library[i];
    const bookEl = document.createElement("div");
    bookEl.classList.add("book");
    bookEl.innerHTML = `
    <p>Title: ${book.title}</p>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <p>Status: ${book.read.checked ? "Read": "Not yet"}</p>
    <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
    <button class="toggle-btn" onclick="toggleRead(${i})">Toggle</button>
    `
    myLibrary.appendChild(bookEl);
  }
}

function addBookLibrary(){
  let title = document.getElementById("input-title").value;
  let author = document.getElementById("input-author").value;
  let pages = document.getElementById("input-pages").value;
  let read = document.getElementById("input-read");

  const newBook = new Book(title, author, pages, read);
  library.push(newBook);
  displayBooks()
}

newBookBtn.addEventListener("click", () =>{
  form.style.display = "block"
})


form.addEventListener("submit", (event) => {
   event.preventDefault();
   addBookLibrary()
})
