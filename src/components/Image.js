import React, { useState } from "react";

export const Image = ({ image }) => {
  //const { addImageToFavouriteList } = useContext(GlobalContext);

  const addImageToFavouriteList = () => {
    const favouriteList = JSON.parse(localStorage.getItem("favouriteList"));
    const newfavouriteList = JSON.stringify([
      ...favouriteList,
      { image: image },
    ]);
    localStorage.setItem("favouriteList", newfavouriteList);
  };

  return (
    <div>
      {image.id ? (
        <img
          className="image"
          src={image.urls.small}
          alt={`${image.title}`}
          onClick={() => addImageToFavouriteList(image)}
        />
      ) : (
        <div>No image... </div>
      )}
    </div>
  );
};
