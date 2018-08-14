import React from "react";
import { IImageInfo } from "../types/IPageInfo";

export default (props: IImageInfo) => {
  // tslint:disable-next-line:no-console
  console.log(props);
  if (props === undefined) {
    return null;
  }

  const imgStyle =
    props.pos !== undefined
      ? { objectPosition: `${props.pos[0]}% ${props.pos[1]}%` }
      : {};

  return (
    <div className="mainImage">
      <img src={`/img/houses/${props.src}`} style={imgStyle} />
      {props.heading && <h1>{props.heading}</h1>}
    </div>
  );
};
