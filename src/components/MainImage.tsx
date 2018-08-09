import React from "react";
import IPageInfo from "../types/IPageInfo";

export default (props: { page: IPageInfo }) => {
  const imgStyle =
    props.page.imgPos !== undefined
      ? { objectPosition: `${props.page.imgPos[0]}% ${props.page.imgPos[1]}%` }
      : {};

  return (
    <div className="mainImage">
      <img src={`/img/houses/${props.page.imgSrc}`} style={imgStyle} />
      <h1>{props.page.heading || props.page.name}</h1>
    </div>
  );
};
