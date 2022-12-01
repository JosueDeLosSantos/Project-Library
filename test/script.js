



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
    found.dataset.test = `${i}`
   }
    
}

box.forEach(box => {
    box.addEventListener('click', deleter)
})
