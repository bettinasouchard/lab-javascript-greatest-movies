// Iteration 1: All directors? - Get the array of all directors.

/**
 * returns an array containing an array with all the directors
 * @param {Array} list
 * @returns {Array} with directors
 */

 const getAllDirectors = function (array) {
  return array.map((arr) => {
    return arr.director;
  });
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

/**
 * returns an array with all spielberg's drama movies 
 * @param {Array} list
 * @returns {Array} with Spielberg Drama Movies
 */


const howManyMovies = function (array) {
  const stevenSpielMovies = array.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return stevenSpielMovies.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

/**
 * returns an array with all spielberg's drama movies 
 * @param {Array} list
 * @returns {Number} global rate of the movies list with 2 decimals
 */


function ratesAverage(array) {
  if (array.length === 0) return 0;
  const sumRate = array.reduce((a, movie) => {
    return movie.rate === undefined ? a : (a += movie.rate);
  }, 0);
  return Number((sumRate / array.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

/**
 * returns an array with all spielberg's drama movies 
 * @param {Array} list
 * @returns {Number} global rate of the drama movies list with 2 decimals
 */


function dramaMoviesRate(movieList) {
  const drama = movieList.filter(function (movie) {
    return movie.genre.includes("Drama");
  });
  let total = 0;
  let result = drama.map((x) => (total += x.rate));
  if (drama.length === 0) return total;
  return Number((total / drama.length).toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies) {
     
	let a = (movies.slice().sort((function(a,b) { 
        if (a.year> b.year) { return 1;}
        else if (a.year < b.year) {return -1;}
        else { 
            if(a.title > b.title) {return 1;}
            else if (a.title < b.title) {return -1;}
        }

        return result;
      }))); 
    
    
    return a;
}

// let value =	(a.year == b.year) ? (a.title > b.title ? 1 : -1) : (a.year> b.year? 1 : -1); 


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

/**
 * returns an array with all spielberg's drama movies 
 * @param {Array} list
 * @returns {Array} top 20 movies list in alphabetic order
 */

function orderAlphabetically(array) {
  let film = array.map((movie) => {
    return movie.title;
  });
  let sorting = film.sort();
  return sorting.slice(0, 20);
}
orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg (movies) {
    if (movies.length === 0) return null;

  
console.log(movieRatesByYear)
    //return `The best year was ${YEAR} with an average rate of ${RATE}`
}

