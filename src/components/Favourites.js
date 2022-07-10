import React, { useState, useEffect } from "react";
import { Image } from "./Image";
import "../App.css";

/**
 * In this component images are retrieved from local storage
 * favouriteList and update results by passing it as an argument
 * results are used to render the image components
 *
 *
 */
export const Favourites = () => {
  const [results, setResults] = useState([]);
  const [count, setCount] = useState(0);

  // To hinder use effect from causing an infinite render, count is created
  // count only changes when removeFromFavourites is called
  useEffect(() => {
    const favouriteList = JSON.parse(localStorage.getItem("favouriteList"));
    if (favouriteList) {
      setResults(favouriteList);
    }
  }, [count]);

  // call removeFromFavourites when an image is clicked on
  const removeFromFavourites = (image) => {
    setCount(count + 1);
    const index = results.findIndex((result) => result.id === image.id);
    results.splice(results[index], 1);
    setResults(results);
    localStorage.setItem("favouriteList", JSON.stringify(results));
  };

  return (
    <>
      <div>
        {results.length > 0 && (
          <ul className="image-list">
            {results.map((image) => (
              <li key={image.id}>
                <Image image={image} handleClickEvent={removeFromFavourites} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
