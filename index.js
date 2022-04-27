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
    message.textContent = 'Movie deleted!';
    revealMessage();
}

const crossOffMovie = (event)  => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = "Movie Watched"
    } else {
        message.textContent = "Movie added back"
    }

    revealMessage();
}

const form = document.querySelector('form');
form.addEventListener('submit', addMovie);


function revealMessage()  {
    message.classList.remove('hide');
    const fn = () => {message.classList.add('hide')}
    setTimeout(fn, 1000)
}

//Create a function called revealMessage. Inside the function, call setTimeout, passing in a callback function and a time in milliseconds. - The callback function should add the hide class to message, you can see what the hide class does in the CSS file - We want the callback function to run 1 second after setTimeout is invoked, so for the second argument, pass in the number 1000