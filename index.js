console.log('hello world')

let message = document.querySelector('#message')

document.querySelector('form').addEventListener('submit', addMovie)

function addMovie (event){
    event.preventDefault()
    let inputField = document.querySelector('input')

    let movie = document.createElement('list')

    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)


    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    let movieList = document.querySelector('ul')
    movieList.appendChild(movie)
    //or
    //document.querySelector("ul").appendChild(movie)

    inputField.value = " "
}

function deleteMovie (event) {
    message.textContent = 'Movie deleted'
    event.target.parentNode.remove()
}

function crossOffMovie (event) {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie watched'
    } else {
        message.textContent = 'Movie added back'
    }
}




