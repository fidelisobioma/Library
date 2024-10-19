const author = document.querySelector("#author");
const title = document.querySelector("#title");
const numberOfPages = document.querySelector("#numberofpages");
const read = document.querySelector("#read");

const Submit = document.querySelector(".submit");
const display = document.querySelector(".display");
const addBook = document.querySelector(".addbook");
const addBook2 = document.querySelector(".addbook2");
const form = document.querySelector(".form");
const shelf = document.querySelector(".shelf");
// console.log(removeBook);
addBook.addEventListener("click", () => {
  form.classList.add("showform");
});
addBook2.addEventListener("click", () => {
  form.classList.add("showform");
});

Submit.addEventListener("click", (e) => {
  e.preventDefault();
  let authorName = author.value;
  let bookTitle = title.value;
  let pages = numberOfPages.value;
  let readBook = read.value;
  //   const myLibrary = [];
  //   console.log(myLibrary);

  function Book(author, title, numberOfPages, read) {
    this.author = authorName;
    this.title = bookTitle;
    this.numberOfPages = pages;
    this.read = readBook;
  }

  let book = new Book(
    `${authorName}`,
    `${bookTitle}`,
    `${pages}`,
    `${readBook}`
  );
  //   myLibrary.push(book);
  //   console.log(book);
  display.innerHTML += `
  <div class="update">
        <p class="author">Author: ${book.author}</p>
        <p class="tile">Title: ${book.title}</p>
        <p class="pages">Pages: ${book.numberOfPages}</p>
        <p class="read">Read: ${book.read}</p>
        <button onclick="this.parentElement.style.display='none' ">
          Remove
        </button>
      </div>
  `;
  form.classList.remove("showform");
  shelf.style.display = "none";
  author.value = "";
  title.value = "";
  numberOfPages.value = "";
});
