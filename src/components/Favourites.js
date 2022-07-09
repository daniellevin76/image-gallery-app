import React, { useState, useEffect } from "react";
import { Image } from "./Image";
import "../App.css";

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
