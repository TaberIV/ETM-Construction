import React from "react";
import { IImageInfo } from "../../../types/IPageInfo";

interface IThumbnailProps {
  photo: IImageInfo;
  handleClick: (photo: IImageInfo) => () => void;
}

export default ({ photo, handleClick }: IThumbnailProps) => (
  <img
    src={`img/houses/${photo.src}`}
    alt={photo.heading}
    onClick={handleClick(photo)}
  />
);
