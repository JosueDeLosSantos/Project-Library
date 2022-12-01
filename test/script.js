



const someArr = ['box1', 'box2', 'box3']

console.log(someArr)
const container = document.querySelector('.container')


//Selects all boxes
const box = document.querySelectorAll('.box')
//Converts all boxes into an array
const boxArr = Array.from(box)

function deleter(e){
    console.log(e)
    console.log(e.target)
   //Targets the 'clicked' node
   const found = e.target
   
   for (let i in boxArr){
    
    if(boxArr[i] == found)
    found.dataset.test = `${i}`;
    
   }
   someArr.splice(found.dataset.test, 1)
   console.log(someArr)
}

box.forEach(box => {
    box.addEventListener('click', deleter)
})
