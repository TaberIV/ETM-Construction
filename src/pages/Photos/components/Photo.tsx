import React from "react";
import IPhotoInfo from "../types/PhotoInfo";

export default ({ photo }: { photo: IPhotoInfo }) => (
  <figure>
    <img src={photo.src} alt={photo.name} />
    <figcaption>{photo.name}</figcaption>
  </figure>
);
