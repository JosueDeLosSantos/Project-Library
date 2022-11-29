


let body = document.querySelector('body')
let form = document.querySelector('form')
let btn = document.querySelector('#btn')
let titlebox = document.querySelector('#title')
let authorbox = document.querySelector('#author')
let pagesbox = document.querySelector('#pages')
let readbox = document.getElementsByName('read')
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

  let temp = new Book(titlebox.value, authorbox.value, pagesbox.value, displayRadioValue())
  
    myLibrary.push(temp)
    console.log(myLibrary)

    //clears input
    titlebox.value = '';
    authorbox.value = '';
    pagesbox.value = '';
    hideRadioValue();
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
Experiment

for (let i in ObjectArray){
  if (i in ObjectArray){
    //this is used to loop through arrays and objects.
  }
}
*/


//radio buttons click

 function displayRadioValue() {
  let selection = document.getElementsByName('read');

  for(let i in selection) {
    if(selection[i].checked)
    return selection[i].value
  }
}

let selection1 = document.querySelector('#False')
let selection2 = document.querySelector('#True')

selection1.addEventListener('click', displayRadioValue)
selection2.addEventListener('click', displayRadioValue)  



/* Experiment

for (let i in ObjectArray){
  if (i in ObjectArray){
    //this is used to loop through arrays and objects.
  }
} */

function hideRadioValue() {
  let selection = document.getElementsByName('read');

  for(let i in selection) {
    if(selection[i].checked)
    selection[i].checked = false
  }
} 