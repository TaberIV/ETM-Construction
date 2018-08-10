import React, { Component } from "react";
import IPhotoInfo from "../types/PhotoInfo";
import Photo from "./Photo";

interface IPhotoGalleryProps {
  photos: IPhotoInfo[];
}

export default class PhotoGallery extends Component<IPhotoGalleryProps> {
  constructor(props: IPhotoGalleryProps) {
    super(props);
  }

  public render() {
    const { photos } = this.props;

    return (
      <main>
        {photos.map(photo => (
          <Photo photo={photo} />
        ))}
      </main>
    );
  }
}
