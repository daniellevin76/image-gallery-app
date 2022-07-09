import React, { useState, useEffect } from "react";
import { Image } from "./Image";

export const Favourites = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const favouriteList = JSON.parse(localStorage.getItem("favouriteList"));
    if (favouriteList) {
      setResults(favouriteList);
    }
  }, []);

  return (
    <>
      <h3 className="heading">Favourites</h3>
      <div>
        {results.length > 0 && (
          <ul className="image-list">
            {results.map((image) => (
              <li key={image.image.id}>
                <Image image={image.image} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
