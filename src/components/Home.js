import React, { useState, useEffect } from "react";
import { Image } from "./Image";
import "../App.css";

/**

 In this object search result from api is retrieved and save to local storage
 under "imageList"
 The images are rendered and a method that adds an image a "favouriteList" 
 is created. THe method is passed as an argument to the Image component
 * 
 */
export const Home = () => {
  console.log("home render");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);

  // setQUery onChange in input field
  const setSearchValue = (e) => {
    e.preventDefault();
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

  //Call fetchAPI to fetch imags from unsplash
  const fetchImages = () => {
    //fetchRequest();
    //setQuery("");
  };

  // save images to local Storage
  useEffect(() => {
    localStorage.setItem("imageList", JSON.stringify(results));
  }, [results]);

  //Add a a clicked image to favourite list
  const addImageToFavouriteList = (image) => {
    //check if the item is allready in local storage
    const itemExists = favourites.some((fav) => {
      return image.id === fav.id;
    });

    //it item not in local storage add to favourites
    if (!itemExists) {
      setFavourites([...favourites, image]);
    }
  };

  //When favourites is rerendered set local Storage favourites
  useEffect(() => {
    localStorage.setItem("favouriteList", JSON.stringify(favourites));
  }, [favourites]);

  //Render images retrieved upon search
  return (
    <>
      <div className="search-field">
        <input
          type="text"
          placeholder="Search for an image"
          onChange={setSearchValue}
        />

        <button onClick={fetchRequest}>FETCH</button>
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
