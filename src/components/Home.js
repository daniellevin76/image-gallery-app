import React, { useState, useEffect } from "react";
import { Image } from "./Image";
import "../App.css";

export const Home = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const setSearchValue = (e) => {
    // e.preventDefault();
    setQuery(e.target.value);
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

  //fetch imags from unsplash
  const fetchImages = () => {
    fetchRequest();
    // setQuery("");
  };

  // save images to local Storage
  useEffect(() => {
    localStorage.setItem("imageList", JSON.stringify(results));
  }, [results]);

  const addImageToFavouriteList = (image) => {
    const itemExists = favourites.some((fav) => {
      return image.id === fav.id;
    });

    if (!itemExists) {
      setFavourites([...favourites, image]);
    }
  };
  useEffect(() => {
    localStorage.setItem("favouriteList", JSON.stringify(favourites));
  }, [favourites]);
  console.log(favourites);
  return (
    <>
      <div className="search-field">
        <input
          type="text"
          placeholder="Search for an image"
          onChange={setSearchValue}
        />

        <button onClick={fetchImages}>FETCH</button>
      </div>
      <div>
        {results.length > 0 && (
          <ul className="image-list">
            {results.map((image) => (
              <li key={image.id}>
                <Image
                  image={image}
                  handleClickEvent={addImageToFavouriteList}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div />
    </>
  );
};
