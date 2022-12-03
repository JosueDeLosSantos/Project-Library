// Project Library

const body = document.querySelector('body')
const form = document.querySelector('form')
const btn = document.querySelector('#btn')
const titlebox = document.querySelector('#title')
const authorbox = document.querySelector('#author')
const pagesbox = document.querySelector('#pages')
const readbox = document.getElementsByName('read')
const add = document.querySelector('#add')
const cardList = document.querySelector('.card-list')

form.hidden = true

let myLibrary = [];

function Book(title, author, pages, read) {

  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read

}

Book.prototype.readStatus = function(){

  return this.read == 'False' ? 'True' : 'False';

}

function addBookToLibrary(e) {

  //Creates new object
  let temp = new Book(titlebox.value, authorbox.value, pagesbox.value, displayRadioValue())

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
      temp[key] == undefined ? span2.innerHTML = 'False' : span2.innerHTML = temp[key]
    }

  }

  //buttons div
  const editer = document.createElement('div')
  editer.classList.add('editer')
  //delete button
  const deleter = document.createElement('button')
  deleter.classList.add('deleter')
  deleter.innerText = 'delete'
  //read button
  const read = document.createElement('button')
  read.classList.add('read-checker')
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
  
    const deletion = e.target.parentNode.parentNode.dataset.cardId;
    cardList.removeChild(e.target.parentNode.parentNode)
    //delete book from my library
    delete myLibrary[deletion]
    console.log(myLibrary)
  }
})

//Selects dynamically created elements by bubbling 
cardList.addEventListener('click', function(e){
  /***read button 'click'***/
  if(e.target.classList.contains('read-checker')){
    // let status = e.target.parentNode.previousSibling.children[1].innerHTML;
    let status = e.target.parentNode.previousSibling.children[1];
    // return status == 'False' ? status = '' : status = ''
    // console.log(status.innerText)
    console.log(e.target.parentNode.previousSibling)
    
    // const parentTest = e.target.parentNode.previousSibling
    // parentTest.removeChild(status)

    const readStatus = myLibrary[e.target.parentNode.parentNode.dataset.cardId].readStatus()
    status.innerText = readStatus
    // myLibrary[e.target.parentNode.parentNode.dataset.cardId] = readStatus
    let looper = myLibrary[e.target.parentNode.parentNode.dataset.cardId]

    for(let key in looper){
      if(looper.hasOwnProperty(key)){

        if(looper[key] == 'False' && key == 'read'){
          looper.read = 'True'
          myLibrary[e.target.parentNode.parentNode.dataset.cardId] = looper
          console.log(myLibrary)
        }else if(looper[key] == 'True' && key == 'read'){
          looper.read == 'False'
          myLibrary[e.target.parentNode.parentNode.dataset.cardId] = looper
          console.log(myLibrary)
        }
        
      }
    }

  }
})



/* Experiment

for (let i in Object){
  if (i in Object){
    //this is used to loop through objects.
  }
} */