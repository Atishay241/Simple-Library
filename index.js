const myLibrary = [];

function Book(name,author,pages,isread) {
  // the constructor...
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
}

function addBookToLibrary(name,author,pages,isread) {
  // take params, create a book then store it in the array
    const book = new Book(name,author,pages,isread);
    myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("Atomic Habits", "James Clear", 320, false);
addBookToLibrary("Jingo", "Terry Pratchett", 464, false);
addBookToLibrary("The Blade Itself", "Joe Abercrombie", 529, true);
addBookToLibrary("The Alchemist", "Paulo Coelho", 208, true);


// console.log(myLibrary);

const container  = document.querySelector(".container");

function renderbooks(){

    container.innerHTML = "";

    myLibrary.forEach((book)=>{
        console.log(book);
        const card = document.createElement("div");

        card.classList.add("card");
        card.id = `book-${book.id}`;

        const status = (book.isread === true)
            ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
                <title>book-check</title>
                <path d="M16.75 22.16L14 19.16L15.16 18L16.75 19.59L20.34 16L21.5 17.41L16.75 22.16M6 22C4.89 22 4 21.1 4 20V4C4 2.89 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.34C19.37 13.12 18.7 13 18 13C14.69 13 12 15.69 12 19C12 20.09 12.29 21.12 12.8 22H6Z" />
               </svg>`
            : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
                <title>book-off</title>
                <path d="M18.68 2.12L12 8.8V2H18C18.24 2 18.46 2.05 18.68 2.12M9.5 7.5L7 9V2H6C4.89 2 4 2.9 4 4V16.8L11.88 8.93L9.5 7.5M21.61 1.73L1.89 21.46L3.16 22.73L4.54 21.35C4.9 21.75 5.42 22 6 22H18C19.11 22 20 21.11 20 20V5.89L22.89 3L21.61 1.73Z" />
               </svg>`;

        const cross = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon" >
            <title>delete</title>
            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>`;

        card.innerHTML = `
        <h3 class="title">${book.name}</h3>
        <p class="author"><strong>Author:</strong> ${book.author}</p>
        <p class="page"><strong>Pages:</strong> ${book.pages}</p>
        <div class="icons">
        <button class="status btn" data-id = "${book.id}">${status}</button>
        <button class="delete btn" data-id = "${book.id}">${cross}</button>
        </div>
    `;
        
        container.appendChild(card);
    })
}


// const toggle = document.querySelectorAll(".status");
// toggle.forEach((button)=> {
//     button.addEventListener("click" , ()=>{
//         console.log("sjndcs");
//         const bookid = button.getAttribute("data-id");
//         const book = myLibrary.find(b => b.id === bookid);
//         if(book){
//             book.isread = !book.isread;
//             renderbooks();
//         }
//     })
// })

// const del = document.querySelectorAll(".delete");
// toggle.forEach((button)=> {
//     button.addEventListener("click" , ()=>{
//         const bookid = button.getAttribute("data-id");
//         const book_idx = myLibrary.findIndex(b => b.id === bookid);
//         if(book_idx != -1){
//             myLibrary.slice(book_idx,1);
//             renderbooks();
//         }
//     })
// })


renderbooks();
