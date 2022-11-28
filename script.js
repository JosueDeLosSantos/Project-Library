



let myLibrary = [];

/*This function converts the information provided into an array and then converts the array
into an object*/
addBookToLibrary.prototype.printer = function(){
    
    //converts info into aray
    let temp = [this.title, this.pages]
    //converts array into object
    let obj = {...temp}
    return obj

}

//Sets the constructor prototype to inherit functions from it
Book.prototype = Object.create(addBookToLibrary.prototype)

//constructor
function Book(title, pages) {
    this.title = title,
    this.pages = pages
  // the constructor...
}

let example1 = new Book('my fabe', 100)

//Adds object into the myLibrary array
function addBookToLibrary() {

    myLibrary.push(example1.printer())

  // do stuff here
}

addBookToLibrary()

console.log(myLibrary)

/***Data collection****/

let body = document.querySelector('body')
let form = document.querySelector('form')
let btn = document.querySelector('#btn')
let namebox = document.querySelector('#name')


let myNewArr = []



function goNow(e){
    myNewArr.push(namebox.value)
    //clears input
    namebox.value = '';
    console.log(myNewArr)
    //prevents button from refreshing the page
    e.preventDefault();
}




btn.addEventListener('click', goNow)


