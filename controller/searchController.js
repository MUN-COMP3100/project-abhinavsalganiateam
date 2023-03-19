import { MovieBusiness } from "../model/business/movieBusiness.js";

export const searchController = async (req, res) => {
  try {
    const query = req.query.q;
    const type = req.query.type; // added search type
    let results;
    switch (
      type // added switch statement to handle different search types
    ) {
      case "movie":
        results = await MovieBusiness.searchMovie(query);
        break;
      case "theater":
        results = await MovieBusiness.searchTheater(query);
        break;
      default:
        results = [];
        break;
    }
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
