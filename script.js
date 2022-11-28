

let body = document.querySelector('body')
let form = document.querySelector('form')
let btn = document.querySelector('#btn')
let namebox = document.querySelector('#name')


//toggle
let toggle = document.querySelector('#toggle')



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

function toggler(){
    if(form.hidden == false) {
        form.hidden = true
    } else {
        form.hidden = false
    }
}

btn.addEventListener('click', addBookToLibrary)
toggle.addEventListener('click', toggler)



