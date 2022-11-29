

let body = document.querySelector('body')
let form = document.querySelector('form')
let btn = document.querySelector('#btn')
let titlebox = document.querySelector('#title')
let authorbox = document.querySelector('#author')
let pagesbox = document.querySelector('#pages')
let readbox = document.querySelector('#read')
let add = document.querySelector('#add')
let cardList = document.querySelector('.card-list')


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

let checker = []
checker.push(mine)
checker.push(mine)
checker.push(mine)
checker.push(mine)
checker.push(mine)
checker.push(mine)
checker.push(mine)
checker.push(mine)
checker.push(mine)
checker.push(mine)
checker.push(mine)
checker.push(mine)

console.log(checker)

for (i = 0; i < checker.length; i++){
  //creates a card on every cycle
  const card = document.createElement('div')
  card.classList.add('card')
  cardList.appendChild(card)

  for (var key in mine) {
    //creates a div on every cycle
    if (mine.hasOwnProperty(key)) {

      const category = document.createElement('div')
      category.classList.add('category')
      card.appendChild(category)
      //MAGIC
      category.innerHTML += "<span>"+key+"</span>" +": " + mine[key];
    }
  } 
}



