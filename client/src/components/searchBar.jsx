import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    // Update suggestions based on the input value
    // You can replace this with an API call to fetch suggestions
    setSuggestions(["Suggestion 1", "Suggestion 2", "Suggestion 3"]);

  };

  
  return (
    <div className="hidden xl:flex flex-col justify-center items-center bg-inherit">
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search for a movie, tv show, person..."
          className="w-[300px] h-[29px] rounded-l-md outline-none px-4 bg-inherit text-gray-50 placeholder-gray-400 text-sm focus:ring-2 focus:ring-[#fca311]"
          value={search}
          onChange={handleChange}
        />
        <button className="bg-[#fca311] h-[33px] w-[33px] rounded-r-md flex justify-center items-center">
          <BiSearch />
        </button>
      </div>
      {/* Add suggestion list */}
      <div className="absolute mt-[153px] ml-[-29px] w-[300px]">
        {suggestions.length > 0 && search.length > 0 && (
          <ul className="bg-gray-800 rounded-md shadow-lg">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="p-2 hover:bg-gray-700 cursor-pointer">
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
