console.log('Hello world!')


//In the crossOffMovie function, we’re going to do something similar, but we want to have different messages based off of whether the movie was just checked off as ‘watched’ or if it was added back to the list. So let’s start by creating the structure for an if/else block. Put it below where you toggled the checked class in the crossOffMovie function.



const message = document.querySelector('#message');

function addMovie(event) {
    event.preventDefault();
    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    const list = document.querySelector('ul');

    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X'
    list.appendChild(movie);
    movie.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', deleteMovie);

    movieTitle.addEventListener('click', crossOffMovie);
}

function deleteMovie(event){
    event.target.parentNode.remove();
    message.textContent = 'Movie deleted!'
}

const crossOffMovie = (event)  => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = "Movie Watched"
    } else {
        message.textContent = "Movie added back"
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', addMovie);

//The condition of your if statement should check if it’s true that the event.target.classList contains the checked class. - contains is a built-in method that can be used on classList, the structure for doing so is event.target.classList.contains(‘some-class-name’)