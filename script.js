const addBook= document.querySelector('.add');
const display=document.querySelector('.display-Books');
const myLibrary=[]




function book(title,author,page,isRead){
    this.title=title
    this.author=author
    this.page=page
    this.isRead=isRead
    
};
function addBookToLibrary(title, author, page, isRead){
    const createBook = new book(title,author,page,isRead)
    myLibrary.push(createBook)
};

addBook.addEventListener('click',function(){
    const formContainer=document.getElementById('form-container')
    if(formContainer.style.display==='none'|| formContainer.style.display===''){
        formContainer.style.display='flex'
    }else{
        formContainer.style.display='none'
    }
});



document.getElementById("book-form").addEventListener('submit', function(e){
    e.preventDefault()
    const title=document.getElementById('title').value;
    const author= document.getElementById('author').value;
    const page= document.getElementById('pages').value;
    const isRead=document.getElementById('isRead').checked;
    addBookToLibrary(title, author, page, isRead);
    displayBooks()
    this.reset();
    document.getElementById('form-container').style.display="none";
    console.log(myLibrary);
});

document.getElementById('cancel').addEventListener('click',function(){
    
    document.getElementById('form-container').style.display="none";
})

function displayBooks(){
    const displayContainer=document.getElementById('display-books');
    displayContainer.innerHTML=""

    myLibrary.forEach((book,index)=>{
        const bookCardWrapper= document.createElement('div')
        bookCardWrapper.className='book-card-wrapper'

        const bookCard=document.createElement('div')
        bookCard.className='book-card' + index

        const bookTitle=document.createElement('h3')
        bookTitle.textContent = book.title

        const bookAuthor=document.createElement('p')
        bookAuthor.textContent= `Author: ${book.author}`

        const bookPages=document.createElement('p')
        bookPages.textContent=`Pages: ${book.page}`

        const status=document.createElement('p')
        status.textContent=`${book.isRead? 'Read': 'Not read'}`

        const deleteButton=document.createElement('button')
        deleteButton.textContent='delete'
        deleteButton.addEventListener('click',function(){
            deleteBook(index)
        })
        bookCardWrapper.appendChild(bookCard);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(status);
        bookCard.appendChild(deleteButton);

        displayContainer.appendChild(bookCard);
    })
}

function deleteBook(index){
    myLibrary.splice(index,1);
    displayBooks()
}