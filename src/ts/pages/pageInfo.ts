// Types
import IPageInfo from "../types/IPageInfo";
// Pages
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Home from "./Home";
import Photos from "./Photos";
import Testimonials from "./Testimonials";
import WhatWeDo from "./WhatWeDo";

export default [
  {
    component: Home,
    name: "Home",
    path: "/",
    imgSrc: "timmy/ETM4.jpg",
    imgPos: [50, 65],
    heading: "Build a Lifestyle"
  },
  {
    component: AboutUs,
    name: "About Us",
    path: "/aboutUs",
    imgSrc: "timmy/ETM5.jpg"
  },
  {
    component: WhatWeDo,
    name: "What We Do",
    path: "/whatWeDo",
    imgSrc: "timmy/ETM2.jpg"
  },
  {
    component: Testimonials,
    name: "Testimonials",
    path: "/testimonials",
    imgSrc: "timmy/ETM19.jpg"
  },
  {
    component: Photos,
    name: "Photos",
    path: "/photos",
    imgSrc: "timmy/ETM11.jpg",
    imgPos: [50, 55]
  },
  {
    component: Contact,
    name: "Contact",
    path: "/contact",
    imgSrc: "timmy/ETM7.jpg"
  }
] as IPageInfo[];
