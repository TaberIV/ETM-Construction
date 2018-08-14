import React from "react";
import IPhotoInfo from "../types/PhotoInfo";
import PhotoGallery from "./PhotoGallery";

export default () => {
  const photos = [
    { name: "ETM2", src: "/img/houses/timmy/ETM2.jpg" },
    { name: "ETM3", src: "/img/houses/timmy/ETM3.jpg" },
    { name: "ETM4", src: "/img/houses/timmy/ETM4.jpg" },
    { name: "ETM5", src: "/img/houses/timmy/ETM5.jpg" },
    { name: "ETM7", src: "/img/houses/timmy/ETM7.jpg" },
    { name: "ETM11", src: "/img/houses/timmy/ETM11.jpg" },
    { name: "ETM12", src: "/img/houses/timmy/ETM12.jpg" },
    { name: "ETM19", src: "/img/houses/timmy/ETM19.jpg" }
  ] as IPhotoInfo[];

  return <PhotoGallery photos={photos} />;
};
