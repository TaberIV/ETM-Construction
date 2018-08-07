import React from "react";
import IPageInfo from "../types/IPageInfo";

export default (props: { page: IPageInfo }) => (
  <div className="mainImage">
    <img src={`/img/houses/${props.page.imgSrc}`} />
    <h1>{props.page.heading || props.page.name}</h1>
  </div>
);
