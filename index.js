console.log('hello world')
document.querySelector('form').addEventListener('submit', addMovie);
const message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault();
    let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement('span');
    movieTitle.textContext = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "x"
    movie.appendChild(deleteBtn)

    const list = document.querySelector('ul');
    list.appendChild(movie)
    //document.querySelector.appendChild(movie)

    inputField.value = ''
}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie watched!'
        //interemdiate version
        //message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = 'Movie added back!'
        //interemdiate version
        //message.textContent = `${event.target.textContent} added back!`
    }

    //revealMessage will be part of the intermediate instructions
    revealMessage()
}

}




