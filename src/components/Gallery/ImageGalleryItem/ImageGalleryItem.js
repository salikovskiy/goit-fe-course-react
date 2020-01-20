import React from "react";

const ImageGalleryItem = ({ data, handleOpen }) => (
  <li className="ImageGalleryItem">
    <img
      src={data.webformatURL}
      alt="kartinka"
      className="ImageGalleryItem-image"
      onClick={() => handleOpen(data.largeImageURL)}
    />
  </li>
);

export default ImageGalleryItem;
