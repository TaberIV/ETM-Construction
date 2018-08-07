import React from "react";

interface IMainImageProps {
  imgSrc: string;
  heading: string;
}

export default ({ imgSrc, heading }: IMainImageProps) => (
  <div className="mainImage">
    <img src={`/img/houses/${imgSrc}`} />
    <h1>{heading}</h1>
  </div>
);
