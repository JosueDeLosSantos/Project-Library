

let body = document.querySelector('body')
let form = document.querySelector('form')
let btn = document.querySelector('#btn')
let titlebox = document.querySelector('#title')
let authorbox = document.querySelector('#author')
let pagesbox = document.querySelector('#pages')
let readbox = document.querySelector('#read')
let add = document.querySelector('#add')
let cardList = document.querySelector('.card-list')

//Hides the 'add' button when the page first load.
form.hidden = true


let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

function addBookToLibrary(e) {
  // do stuff here

  let temp = new Book(titlebox.value, authorbox.value, pagesbox.value, readbox.value)
  
    myLibrary.push(temp)
    console.log(myLibrary)
    //clears input
    titlebox.value = '';
    authorbox.value = '';
    pagesbox.value = '';
    readbox.value = '';
    //prevents form buttons from refreshing the page
    e.preventDefault();

    form.hidden = true
    add.hidden = false
    cardList.hidden = false
}

function adder(){

    form.hidden = false
    add.hidden = true
    cardList.hidden = true
}

btn.addEventListener('click', addBookToLibrary)
add.addEventListener('click', adder)

/*
let arr1 = [{name: 'b'},{author: 'a'}]

for(let i = 0; i < arr1.length; i++) {
  console.log(arr1[i])
}*/


//EXPERIMENT
let mine = new Book('yours', 'josue', 900, true)


for (var key in mine) {
  if (mine.hasOwnProperty(key)) {
      console.log('<p>'+key +'</p>' +": " + mine[key]);
  }
}
