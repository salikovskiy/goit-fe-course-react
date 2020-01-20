import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ data, handleOpen }) => (
  <ul className="ImageGallery">
    {data.map(elem => (
      <ImageGalleryItem data={elem} key={elem.id} handleOpen={handleOpen} />
    ))}
  </ul>
);

export default ImageGallery;
