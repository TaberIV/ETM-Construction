import React, { Component } from "react";
import MainImage from "../../../components/MainImage";
import { IImageInfo } from "../../../types/IPageInfo";
import PhotoThumbnail from "./PhotoThumbnail";

interface IPhotoGalleryProps {
  photos: IImageInfo[];
}

interface IPhotoGalleryState {
  selectedPhoto: IImageInfo;
}

export default class PhotoGallery extends Component<
  IPhotoGalleryProps,
  IPhotoGalleryState
> {
  constructor(props: IPhotoGalleryProps) {
    super(props);

    this.state = { selectedPhoto: props.photos[0] };
  }

  public handleClick = (photo: IImageInfo) => () => {
    this.setState({ selectedPhoto: photo });
  };

  public render() {
    const { photos } = this.props;
    const imgSrc = this.state.selectedPhoto.src;

    return (
      <React.Fragment>
        <MainImage src={imgSrc} />

        <main className="photoGallery">
          {photos.map(photo => (
            <PhotoThumbnail
              key={photo.heading}
              photo={photo}
              handleClick={this.handleClick}
            />
          ))}
        </main>
      </React.Fragment>
    );
  }
}
