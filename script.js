

let myLibrary = [];

addBookToLibrary.prototype.printer = function(){

    let temp = [this.title, this.pages]
    let obj = {...temp}
    return obj

}

Book.prototype = Object.create(addBookToLibrary.prototype)

function Book(title, pages) {
    this.title = title,
    this.pages = pages
  // the constructor...
}

let example1 = new Book('my fabe', 100)

function addBookToLibrary() {

    myLibrary.push(example1.printer())

  // do stuff here
}

addBookToLibrary()

console.log(myLibrary)

/***Data collection****/

let btn = document.querySelector('#btn')
let box = document.querySelector('#name')


function goNow(){
    console.log(box.value)
}




btn.addEventListener('click', goNow)

