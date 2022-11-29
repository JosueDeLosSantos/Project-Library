

const body = document.querySelector('body')
const form = document.querySelector('form')
const btn = document.querySelector('#btn')
const titlebox = document.querySelector('#title')
const authorbox = document.querySelector('#author')
const pagesbox = document.querySelector('#pages')
const readbox = document.querySelector('#read')
const add = document.querySelector('#add')
const cardList = document.querySelector('.card-list')


//card creatro

/* const category = document.createElement('div')
category.classList.add('category') */

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
    //////////////////////////////////////////////////
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
    
      }
    }


    //////////////////////////////////////////////////
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
Experiment

for (let i in ObjectArray){
  if (i in ObjectArray){
    //this is used to loop through arrays and objects.
  }
}
*/

