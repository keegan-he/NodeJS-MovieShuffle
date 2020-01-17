/* MVP Movie Shuffle App 🎥 */

//Create empty movie array
let movieArray = [];

//Add movie
function movieList(movie) {
    movieArray.push(movie)
    console.log(`${movie} has been added to your movie list!`)
}

//User Input
function userAddMovie(movie) {
    let addMovieToList = movieList(movie)
}

//Delete watchlist
function deleteWatchList() {
    let movieArray = [];
    console.log(`Your watchlist has been deleted. `)
}

//Show Movies in Array
function showMovieList() {
    //console.log(movieArray)
    if (movieArray.length >= 1) {
        console.log(
            `Your movie watchlist includes: ${movieArray}
            `
        )
    } else {
        console.log(
            `Your Movie List is Empty. :( Add a movie to your watchlist!`
        )
    }
}
showMovieList()

function chooseMovie() {
    //randomize elements of movieArray and output one. 
    const randomMovie = movieArray[Math.floor(Math.random() * movieArray.length)];
    console.log(`You have shuffled your movielist! Tonight you will be watching: ${randomMovie}.`)
}