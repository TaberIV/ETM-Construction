import React from "react";
import IPageInfo from "../types/IPageInfo";

export default ({ page }: { page: IPageInfo }) => {
  if (page.mainImg === undefined) {
    return null;
  }

  const imgStyle =
    page.mainImg.pos !== undefined
      ? { objectPosition: `${page.mainImg.pos[0]}% ${page.mainImg.pos[1]}%` }
      : {};

  return (
    <div className="mainImage">
      <img src={`/img/houses/${page.mainImg.src}`} style={imgStyle} />
      <h1>{page.mainImg.heading || page.name}</h1>
    </div>
  );
};
