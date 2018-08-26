// Types
// Pages
import IPageInfo from "../types/IPageInfo";
import AboutUs from "./AboutUs";
import Home from "./Home";
import Photos from "./Photos";
import Testimonials from "./Testimonials";
import WhatWeDo from "./WhatWeDo";

const pages = [
  {
    component: Home,
    name: "Home",
    path: "/",
    mainImg: {
      src: "timmy/ETM4.jpg",
      heading: "Build a Lifestyle",
      pos: [50, 65]
    }
  },
  {
    component: AboutUs,
    name: "About Us",
    path: "/aboutUs",
    mainImg: {
      src: "timmy/ETM5.jpg"
    }
  },
  {
    component: WhatWeDo,
    name: "What We Do",
    path: "/whatWeDo",
    mainImg: {
      src: "timmy/ETM19.jpg"
    }
  },
  {
    component: Testimonials,
    name: "Testimonials",
    path: "/testimonials",
    mainImg: {
      src: "timmy/ETM2.jpg",
      pos: [50, 45]
    }
  },
  {
    component: Photos,
    name: "Photos",
    path: "/photos"
  }
] as IPageInfo[];

pages.forEach(page => {
  if (page.mainImg && !page.mainImg.heading) {
    page.mainImg.heading = page.name;
  }
});

export default pages;
