

let body = document.querySelector('body')
let form = document.querySelector('form')
let btn = document.querySelector('#btn')
let namebox = document.querySelector('#name')



let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary(e) {
  // do stuff here

  let temp = {name: `${namebox.value}`}
  
    myLibrary.push(temp)
    console.log(myLibrary)
    //clears input
    namebox.value = '';
    //prevents button from refreshing the page
    e.preventDefault();
}



btn.addEventListener('click', addBookToLibrary)


