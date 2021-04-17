// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = function(movies) {
  return movies.map((movie) => { return movie.director; });
      };


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = function(movies) {
   const stevenSpielMovies = movies.filter((movie) => {return movie.director === "Steven Spielberg" && movie.genre.includes('Drama');});
   return stevenSpielMovies.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesss) {
    if (moviesss.length === 0) return 0;
    const sumRate  = moviesss.reduce((a,movie) => {return (movie.rate === undefined ? a : a+=movie.rate );
},0);
return (Number((sumRate/moviesss.length).toFixed(2)));
}


// Iteration 4: Drama movies - Get the average of Drama Movies

    function dramaMoviesRate(movielist) {
        
        const drama = movielist.filter(function (movie) {
            return (
            movie.genre.includes('Drama') else 
          );
        });
        
        let total = 0
        let result = drama.map((x) => total += x.rate);
        return (Number((total/drama.length).toFixed(2)))
      }

      

// Create a dramaMoviesRate() function that receives an array 
// as a parameter to get the average rate of all drama movies! 
// Let's see if it is better than the general average.
// 
// Again, rounded to 2 decimals!
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear () {
    movies.sort((function(a,b) {
        return a.year - b.year
    }));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
