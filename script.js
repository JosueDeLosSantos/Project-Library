


let body = document.querySelector('body')
let form = document.querySelector('form')
let btn = document.querySelector('#btn')
let titlebox = document.querySelector('#title')
let authorbox = document.querySelector('#author')
let pagesbox = document.querySelector('#pages')
let readbox = document.getElementsByName('read')
let add = document.querySelector('#add')
let cardList = document.querySelector('.card-list')
const div = document.querySelector('.datatester')
// console.log(div.dataset)

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

    //resets library
    myLibrary = [];
    //adds object to library
    myLibrary.push(temp)
    // console.log(myLibrary)
    


    for (let i in myLibrary){
      if(i in myLibrary){
    
        //creates a card on every cycle
        const card = document.createElement('div')
        card.classList.add('card')
        cardList.append (card)
    
        for (let key in temp) {
          
          if (key in temp) {
            //creates a div on every cycle
            const category = document.createElement('div')
            category.classList.add('category')
            const span = document.createElement('span')
            span.classList.add('header')
            const span2 = document.createElement('span')
            span2.classList.add('response')
            card.append(category)
            category.append(span)
            category.append(span2)
            //MAGIC
            span.innerHTML += key+": ";
            span2.innerHTML += temp[key];
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
        //adds both buttons to the div
        editer.append(read)
        editer.append(deleter)
        card.append(editer)
        
    
      }
    }

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


//radio buttons click reset
function hideRadioValue() {
  let selection = document.getElementsByName('read');

  for(let i in selection) {
    if(selection[i].checked)
    selection[i].checked = false
  }
} 



/* Experiment

for (let i in ObjectArray){
  if (i in ObjectArray){
    //this is used to loop through arrays and objects.
  }
} */



/* 
next: 
-add data attribute to each card automatically
-link the data attribute with the cards-array index ex: card-index == [1] && data-attribute == "1"
 */

