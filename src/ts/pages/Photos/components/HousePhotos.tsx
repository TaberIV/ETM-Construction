import React from "react";
import { IImageInfo } from "../../../types/IPageInfo";
import PhotoGallery from "./PhotoGallery";

export default () => {
  const photos = [
    { src: "timmy/ETM2.jpg", heading: "ETM2" },
    { src: "timmy/ETM3.jpg", heading: "ETM3" },
    { src: "timmy/ETM4.jpg", heading: "ETM4" },
    { src: "timmy/ETM5.jpg", heading: "ETM5" },
    { src: "timmy/ETM7.jpg", heading: "ETM7" },
    { src: "timmy/ETM11.jpg", heading: "ETM11" },
    { src: "timmy/ETM12.jpg", heading: "ETM12" },
    { src: "timmy/ETM19.jpg", heading: "ETM19" }
  ] as IImageInfo[];

  return <PhotoGallery photos={photos} />;
};
