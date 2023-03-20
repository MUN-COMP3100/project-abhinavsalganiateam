import { getCity } from "../utils/getCity.js";
async function testMovieShowTimings() {
  // Call the getCity function to get the city details
  const cityData = await getCity("New York");

  // Call the getLocation function to get the latitude and longitude of the city
  const locationData = await getLocation(cityData);

  // Call the getMovieShowTimings function to get the movie timings for the given location
  const movieData = await getMovieShowTimings(locationData.lat, locationData.lng, "Avengers");

  // Verify that the movie data is returned properly
  if (!movieData || !movieData.length) {
    console.error("Error: Failed to retrieve movie timings for the given location and movie name.");
  } else {
    console.log("Test passed: Movie timings retrieved successfully.");
  }
}

// Example usage
testMovieShowTimings();
