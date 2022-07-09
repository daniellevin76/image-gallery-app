import React, { useState, useEffect } from "react";
import { Image } from "./Image";
import "../App.css";

export const Home = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    // e.preventDefault();

    setQuery(e.target.value);
    fetchRequest(query);
  };

  //fetch API
  const fetchRequest = async () => {
    const Access_Key = "pDGeWpWNHHCFlxAglyFiPQaP4MCR2CzrCtFCXp9n4U4";

    const API_URL = `https://api.unsplash.com/search/photos?page=5&per_page48=&query=${query}&client_id=${Access_Key}`;
    const response = await fetch(API_URL);
    const responseJson = await response.json();

    if (!responseJson.error) {
      setResults(responseJson.results);
    }
  };

  // save images to local Storage
  useEffect(() => {
    localStorage.setItem("imageList", JSON.stringify(results));
  }, [results]);

  return (
    <>
      <input
        type="text"
        placeholder="Search for a image"
        value={query}
        onChange={onChange}
      />

      <div>
        {results.length > 0 && (
          <ul className="image-list">
            {results.map((image) => (
              <li key={image.id}>
                <Image image={image} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
