import "../App.css";

/**
 *
 * Image Component is created. handleClickEvent either adds image
 * to favourites or removes image from favourites depending on
 * where the image is rendered
 */
export const Image = ({ image, handleClickEvent }) => {
  console.log("image render");
  //const { addImageToFavouriteList } = useContext(GlobalContext);

  return (
    <div>
      {image.id ? (
        <img
          className="image"
          src={image.urls.regular}
          alt={`${image.title}`}
          onClick={() => {
            handleClickEvent(image);
          }}
        />
      ) : (
        <div>No Image... </div>
      )}
    </div>
  );
};
