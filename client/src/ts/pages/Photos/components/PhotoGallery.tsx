import React, { Component } from "react";
import MainImage from "../../../components/MainImage";
import { IImageInfo } from "../../../types/IPageInfo";
import PhotoThumbnail from "./PhotoThumbnail";

interface IPhotoGalleryProps {
  photos: IImageInfo[];
}

interface IPhotoGalleryState {
  selectedPhoto: IImageInfo;
  hidden: boolean;
}

export default class PhotoGallery extends Component<
  IPhotoGalleryProps,
  IPhotoGalleryState
> {
  constructor(props: IPhotoGalleryProps) {
    super(props);

    this.state = {
      selectedPhoto: props.photos[0],
      hidden: false
    };
  }

  public handleClick = (photo: IImageInfo) => () => {
    this.setState({ selectedPhoto: photo });
  };

  public toggleHidden = () => {
    this.setState(prevState => ({ hidden: !prevState.hidden }));
  };

  public render() {
    const { photos } = this.props;
    const { heading, ...mainImageProps } = this.state.selectedPhoto;
    const { hidden } = this.state;

    return (
      <React.Fragment>
        <MainImage {...mainImageProps} />

        <main className="photos">
          <div className="photoToggle" onClick={this.toggleHidden}>
            {hidden ? "Show" : "Hide"}
          </div>
          <div className="photoGallery">
            {hidden ||
              photos.map(photo => (
                <PhotoThumbnail
                  key={photo.heading}
                  photo={photo}
                  handleClick={this.handleClick}
                />
              ))}
          </div>
        </main>
      </React.Fragment>
    );
  }
}
