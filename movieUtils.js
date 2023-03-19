const SerpApi = require('google-search-results-nodejs');

async function getMovieShowTimings(city, movieTitle) {
  const serpApiKey = process.env.SERP_API_KEY; // fetch API key from environment variables
  const search = new SerpApi.GoogleSearch(serpApiKey);
  
  // build the search parameters object
  const params = {
    q: `${movieTitle} showtimes ${city}`,
    hl: 'en',
    gl: 'us'
  };

  try {
    const data = await search.json(params); // make the API request
    const showtimes = data['showtimes']; // extract the showtimes from the response
    return showtimes;
  } catch (err) {
    console.error(err);
    return null;
  }
}

module.exports = {
  getMovieShowTimings,
};
