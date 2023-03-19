const axios = require('axios');

const getCity = async (lat, lng) => {
  const opencageApiKey = process.env.OPENCAGE_API_KEY;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${opencageApiKey}`;

  try {
    const response = await axios.get(url);
    const city = response.data.results[0].components.city;
    return city;
  } catch (error) {
    console.error(error);
  }
};

module.exports = getCity;
