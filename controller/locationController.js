import { getCity } from './cityUtils.js';
import { getMovieShowTimings } from './movieUtils.js';

async function getLocationFromBrowser() {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const city = await getCity(latitude, longitude);
            resolve(city);
          } catch (error) {
            reject(error);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  } else {
    throw new Error('Geolocation is not supported by this browser.');
  }
}

async function displayMovieShowTimings(movieTitle) {
  try {
    const city = await getLocationFromBrowser();
    const showtimes = await getMovieShowTimings(city, movieTitle);
    // Display the showtimes on the webpage
    const showtimesElement = document.getElementById('movie-showtimes');
    showtimesElement.innerHTML = `<h3>Showtimes for ${movieTitle} in ${city}</h3><ul>`;
    for (let i = 0; i < showtimes.length; i++) {
      showtimesElement.innerHTML += `<li>${showtimes[i]}</li>`;
    }
    showtimesElement.innerHTML += `</ul>`;
  } catch (error) {
    console.error('Error:', error);
  }
}


// Example usage
/*const movieTitle = prompt('Enter the name of the movie:');
displayMovieShowTimings(movieTitle);
*/

