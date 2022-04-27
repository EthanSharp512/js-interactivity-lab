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
    message.textContent = `${event.target.parentNode.textContent} deleted!`;
    revealMessage();
}

const crossOffMovie = (event)  => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
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

//Now, you’ll change your message’s text in the crossOffMovie function so that it tells the user which movie they just crossed off or added back in.

//In the if block inside of the crossOffMovie function, change the message’s textContent to be a string that says something like ‘MOVIE watched!’ where MOVIE is the title of the movie they clicked on. You can access that title in the textContent property of event.target, and you can use concatenation or a template string.

// In the else block, change the string in the same way so that it contains the title of the movie

// Test it out!