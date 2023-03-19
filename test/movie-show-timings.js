// Test function
async function testDisplayMovieShowTimings() {
    // Call the displayMovieShowTimings function
    await displayMovieShowTimings();
    
    // Verify that the showtimes are displayed on the webpage
    const showtimesElement = document.getElementById('movie-showtimes');
    if (showtimesElement.innerHTML === '') {
      console.error('Error: Showtimes not displayed on the webpage.');
    } else {
      console.log('Test passed: Showtimes displayed on the webpage.');
    }
  }
  
  // Example usage
  // testDisplayMovieShowTimings();