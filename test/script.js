/**
 * First, we select parent element
 * */
    const container = document.querySelector("#container");

    /**
     * After that we add event listener to that element
     * */
    container.addEventListener("click", function(e){
        /**
         * Then, we check if we clicked on an element that has
         * .click-btn class
         * */
        if (e.target.classList.contains('click-btn')) {
            /**
             * If we have clicked on such element we
             * run some function
             * */
        alert(`You have clicked ${e.target.innerHTML}`);
        }
    })
    
    /**
     * Now let's create our dynamic element
     * Another button
     * */
    const btn = document.createElement("button");
    /**
     * In order for event bubbling to work,
     * we have to add the same class as we used
     * in our eventListener
     * */
    btn.className = "click-btn";
    //Then we add some text inside that button
    btn.innerText = "The dynamically created button";
    //And we append it
    container.appendChild(btn);