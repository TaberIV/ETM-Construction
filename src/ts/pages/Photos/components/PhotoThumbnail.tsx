import React from "react";
import IPhotoInfo from "../types/PhotoInfo";

export default ({ photo }: { photo: IPhotoInfo }) => (
  <img src={photo.src} alt={photo.name} />
);
