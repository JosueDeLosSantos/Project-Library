// Project Library

const body = document.querySelector('body')
const mainH1 = document.querySelector('.main-h1')
const form = document.querySelector('form')
const btn = document.querySelector('#btn')
const titlebox = document.querySelector('#title')
const authorbox = document.querySelector('#author')
const pagesbox = document.querySelector('#pages')
const readbox = document.getElementsByName('read')
const cardList = document.querySelector('.card-list')
const add = document.querySelector('.add')

form.hidden = true

const falseState = true

let myLibrary = [];

class Book {
  constructor (Title, Author, Pages, Read) {
    this.Title = Title,
    this.Author = Author,
    this.Pages = Pages,
    this.Read = Read
  }

  readStatus() {

    if (this.read == 'False'){
      return 'True'
    } else {
      return 'False'
    } 
  }

}

function addBookToLibrary(e) {
   
  //Creates new object
  let temp = new Book(titlebox.value, authorbox.value, pagesbox.value, displayRadioValue())

  /* const thisIs = e.target.parentNode.parentNode.children[2].children[0]
  thisIs.classList.add('add2') */

  //adds object to library
  myLibrary.push(temp)
  const card = document.createElement('div')
  card.classList.add('card')
  //adds data attribute to every added card
  card.dataset.cardId = myLibrary.length - 1
  //adds card to the card list
  cardList.append (card) 
  
  for (let key in temp) {
    
    if (temp.hasOwnProperty(key)){

      const category = document.createElement('div')
      category.classList.add('category')
      const span = document.createElement('span')
      span.classList.add('header')
      const span2 = document.createElement('span')
      span2.classList.add('response')
      //Add elements to the card
      card.append(category)
      category.append(span)
      category.append(span2)
      //Add content to each new created span
      span.innerHTML = key+": "
      span2.innerHTML = temp[key]
    }

  }

  //buttons div
  const editer = document.createElement('div')
  editer.classList.add('editer')
  //delete button
  const deleter = document.createElement('button')
  deleter.classList.add('deleter')
  deleter.classList.add('delete-bottom')
  deleter.innerText = 'delete'
  //read button
  const read = document.createElement('button')

  read.classList.add('read-checker')
  read.classList.add(`${displayRadioValue()}`)
  read.innerText = 'read'
  //appends 'read' and 'delete' buttons
  card.append(editer)
  editer.append(read)
  editer.append(deleter)
  
  //clears text inputs
  titlebox.value = '';
  authorbox.value = '';
  pagesbox.value = '';
  //reset radio buttons
  hideRadioValue();
  //prevents form buttons from refreshing the page
  e.preventDefault();

  form.hidden = true
  add.hidden = false
  cardList.hidden = false

}

//Adds book cards to the DOM
btn.addEventListener('click', addBookToLibrary)

//radio buttons click
function displayRadioValue() {
  let selection = document.getElementsByName('read');

  for(let i in selection) {

    return selection[i].checked ? selection[i].value : 'False'
    
  }
}

//radio buttons click reset
function hideRadioValue() {
  let selection = document.getElementsByName('read');

  for(let i in selection) {
    if(selection[i].checked)
    selection[i].checked = false
  }
} 

let selection1 = document.querySelector('#False')
let selection2 = document.querySelector('#True')
selection1.addEventListener('click', displayRadioValue)
selection2.addEventListener('click', displayRadioValue)  

function adder(){

  mainH1.hidden = true
  form.hidden = false
  add.hidden = true
  cardList.hidden = true
}

//adds cards to the DOM
add.addEventListener('click', adder)


//Selects dynamically created elements by bubbling 
cardList.addEventListener('click', function(e){
  /***delete button***/

  if(e.target.classList.contains('deleter')){
    //Targets the data attribute value of the selected card
    const deletion = e.target.parentNode.parentNode.dataset.cardId;
    //remove the specific card from the DOM
    cardList.removeChild(e.target.parentNode.parentNode)
    //delete book from my library, using the targeted data attribute number, and leave its respective index empty
    delete myLibrary[deletion]
  }
})

//Selects dynamically created elements by bubbling 
cardList.addEventListener('click', function(e){
  /***read button 'click'***/
  if(e.target.classList.contains('read-checker')){

    let status = e.target.parentNode.previousSibling.children[1];
    //Triggers the inherited function on the specific index of the Library
    let readStatus = myLibrary[e.target.parentNode.parentNode.dataset.cardId].readStatus()
    //Assings the new value to the node's innerText
    status.innerText = readStatus
    //update myLibrary[specific index number].read value
    myLibrary[e.target.parentNode.parentNode.dataset.cardId].read = readStatus
    if(readStatus == 'False'){
      e.target.classList.remove('True')
      e.target.classList.add('False')
    } else {
      e.target.classList.remove('False')
      e.target.classList.add('True')
    }
  }
})



/* Experiment

for (let i in Object){
  if (i in Object){
    //this is used to loop through objects.
  }
} */



class User {
  constructor(name, surname) { 
    this.name = name; 
    this.surname = surname; 
  }
  sayHi() { alert(this.name); }
}

const man = new User('josue', 'De los santos')

// for (let key in man) console.log(key)