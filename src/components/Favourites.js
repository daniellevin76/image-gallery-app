import React, { useState, useEffect } from "react";
import { Image } from "./Image";
import "../App.css";

export const Favourites = () => {
  const [results, setResults] = useState([]);

  const favouriteList = JSON.parse(localStorage.getItem("favouriteList"));
  useEffect(() => {
    if (favouriteList) {
      setResults(favouriteList);
    }
  }, [favouriteList]);

  const removeFromFavourites = (image) => {
    const index = results.findIndex((result) => result.id === image.id);
    console.log(results);
    console.log(index);
    // console.log("removeImage");
    results.splice(results[index], 1);
    console.log(results);
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
