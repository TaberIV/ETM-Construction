import React, { Component } from "react";
import IPhotoInfo from "../types/PhotoInfo";
import PhotoThumbnail from "./PhotoThumbnail";

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
      <main className="photos">
        {photos.map(photo => (
          <PhotoThumbnail key={photo.name} photo={photo} />
        ))}
      </main>
    );
  }
}
