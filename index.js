//index.js is connected to html file through <script src="./index.js"></script>
console.log('hello world') //1
//shows that script is running in browser console

const message = document.querySelector('#message')    //5.1 //from <aside></aside> used to hold text?

function addMovie (event){  //2.1
    event.preventDefault()  //2.9    //without it page refreshes automatically when clicking add button?
    //setting variable for addMovie input
    let inputField = document.querySelector('input') //2.2   //add movie input

    //creating list element which will be parent element for movie title and delete
    //list usually seen with bullet points
    //contained in movie list <ul></ul>
    let movie = document.createElement('list')  //2.3 //movie is parent element

    //creating span element and saving it to movieTitle
    //span element is a generic inline container for phrasing content
    let movieTitle = document.createElement('span') //2.4
    //setting movieTitle text equal to inputField showing that user wrote in our span element contained in list
    movieTitle.textContent = inputField.value   //2.5
    //adding event event listener in addMovie function to cross off movie titles
    movieTitle.addEventListener('click', crossOffMovie) //4.3
    //attaching movieTitle to its parent 
    movie.appendChild(movieTitle)   //2.6   //without movie disappears after adding


    let deleteBtn = document.createElement('button') //3.1   //creating delete button
    deleteBtn.textContent = 'x'  //3.2   // setting button to contain text x
    deleteBtn.addEventListener('click', deleteMovie)    //3.3
    movie.appendChild(deleteBtn)   //3.4

    //saving unordered list into movieList
    //unordered list is bullet points
    let movieList = document.querySelector('ul')    //2.7
    //adding movie to its parent
    movieList.appendChild(movie)
    //or
    //document.querySelector("ul").appendChild(movie)

    inputField.value = " "  //2.10   //clears inputField once movie is added
}

function deleteMovie (event) {  //3.5
    //message.textContent = 'Movie deleted'   //5.2   //displays movie deleted after clicking x
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`  //connecting click to x to movie to movielist to text

    console.log(event.target)   //<button>x</button>
    console.log(event.target.parentNode) //<list></list>

    revealMessage()

    event.target.parentNode.remove() //3.5  //removes both x button and list item once x button is clicked

}


function crossOffMovie (event) {    //4.1
    //css already has checked class
    //toggle event fires an open/close state of an element
    event.target.classList.toggle('checked')    //4.2
    console.log(event.target) //<span class="checked">movie</span>
    console.log(event.target.classList) //4.3   // if crossed off DOMTokenList ['checked', value: 'checked']...if uncrossed DOMTokenList [value: '']
    //DOM token list is parsed representation (example html -> tree) of a list of an-array like object with length property which can be indexed to access individual tokens
                                    

    if (event.target.classList.contains('checked') === true) {  //5.3    //.contains is built in method can be used on classList     
        //message.textContent = 'Movie watched'                           //checked is a class in <li></li> shown in css
        message.textContent = `${event.target.textContent} watched!` //<span class="checked">movie</span> connecting span element to its content
    } else {
        //message.textContent = 'Movie added back'
        message.textContent = `${event.target.textContent} added back!`
    }

    revealMessage()
}


function revealMessage() {
    message.classList.remove('hide')     //hides messages 1 second after clicking delete and message does not appear again
    //console.log(message)                //<aside id="message" class="hide">movie watched</aside>
    //console.log(message.classList)      // ['hide', value: 'hide']
    
    setTimeout(() => {
        message.classList.add('hide')
        console.log(message)                //<aside id="message">movie added back</aside>
        console.log(message.classList)      // [value: '']
    }, 2000)                                // hides message after 2 seconds showing when crossed/uncrossed, or deleted
}

//selecting form containing add movie section and adding listener submit, addMove function
document.querySelector('form').addEventListener('submit', addMovie) //2.8




