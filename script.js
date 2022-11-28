

let body = document.querySelector('body')
let form = document.querySelector('form')
let btn = document.querySelector('#btn')
let namebox = document.querySelector('#name')
let add = document.querySelector('#add')

//Hides the 'add' button when the page first load.
add.hidden = true


let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary(e) {
  // do stuff here

  add.hidden = false

  let temp = {name: `${namebox.value}`}
  
    myLibrary.push(temp)
    console.log(myLibrary)
    //clears input
    namebox.value = '';
    //prevents form buttons from refreshing the page
    e.preventDefault();

    form.hidden = true
    add.hidden = false
}

function adder(){

    form.hidden = false
    add.hidden = true
}

btn.addEventListener('click', addBookToLibrary)
add.addEventListener('click', adder)



