import "../App.css";
export const Image = ({ image, handleClickEvent }) => {
  //const { addImageToFavouriteList } = useContext(GlobalContext);

  console.log(image);
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
