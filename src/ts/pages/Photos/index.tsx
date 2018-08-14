import React from "react";
import MainImage from "../../components/MainImage";
import { IImageInfo } from "../../types/IPageInfo";
import HousePhotos from "./components/HousePhotos";

export default class extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const imageProps: IImageInfo = { src: "timmy/ETM4.jpg" };

    return (
      <React.Fragment>
        <MainImage {...imageProps} />
        <HousePhotos />
      </React.Fragment>
    );
  }
}
