const addBook= document.querySelector('.add');
const display=document.querySelector('.display-Books');
const myLibrary=[]




function book(title,author,page){
    this.title=title
    this.author=author
    this.page=page
    
}
function addBookToLibrary(title, author, page){
    const createBook = new book(title,author,page)
    myLibrary.push(createBook)
}

addBook.addEventListener('click',function(){
    
})

