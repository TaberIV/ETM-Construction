import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import MainImage from "../components/MainImage";
import { IImageInfo } from "../types/IPageInfo";

interface ITestimonial {
  key: string;
  client: string;
  body: string;
  img: IImageInfo;
}

const testimonials: ITestimonial[] = [
  {
    key: "Klein",
    client: "Sarah and Bill Klein",
    body:
      "You have the peace of mind that not only are they honest and fair \
      professionals, but that the subs who they hire are of the highest\
      quality and integrity.",
    img: { src: "kelly/001-Front_View-5688603-large.jpg" }
  },
  {
    key: "Hurwitt",
    client: "Susan and David Hurwitt",
    body:
      "Nobody quite like the hometown boys Alan and Ted McFarlin. Rowayton's\
      finest builders of quality, craftsmanship, and detail. Always\
      professional, always pleasant, often humorous and a delight to work\
      with. We love the finished product.",
    img: { src: "kelly/001-Front_View-5688603-large.jpg" }
  },
  {
    key: "Baruth",
    client: "Ruth and Kerry Baruth",
    body:
      "ETM is simply marvelous! Ted McFarlin and his employees provided the\
      highest quality workmanship, creative design solutions, a willingness to\
      always make us happy, and a worry-free renovation whether we were home\
      or away.  We would hire them again without a second thought and recommend\
      them to anyone who wants the best building experience imaginable.",
    img: { src: "kelly/001-Front_View-5688603-large.jpg" }
  },
  {
    key: "Baker",
    client: "The Bakers",
    body:
      "Ted and his crew were on the site every day and he and his crew left\
      the job site clean and orderly every night. ETM worked very well with our\
      architect to collaborate on use of materials and design changes that we\n\
      made during the project. We recommend Ted to all of our friends and\
      neighbors. Ted and his crew went above and beyond to ensure\
      the project was not only built within our budget, but also to build to\
      the highest quality craftsmanship. Wendy and I are happy to have you use\
      us as references and for anyone who wants to see our home to do so. We\
      are thrilled about the project.",
    img: { src: "kelly/001-Front_View-5688603-large.jpg" }
  },
  {
    key: "Kelly",
    client: "The Kelly's",
    body:
      "Ted and ETM construction did an 18 month renovation of our water-front\
      home in Rowayton. The high quality of craftsmanship and commitment to\
      detail were the driving force to producing a beautiful home that we are\
      often complimented on and feel extremely proud of.\n\
      \
      The renovation was successful because of Ted's dedication to seeing each\
      step of the process through and finding creative solutions to the\
      project's stumbling blocks. His friendly personality, along with those of\
      his crew and subcontractors, allowed for an open and collaborative working\
      relationship and I would highly recommend ETM Construction to anyone\
      building or renovating their home.",
    img: { src: "timmy/ETM5.jpg" }
  }
];

const mainImg = (img: IImageInfo) => () => <MainImage {...img} />;

const testimonial = (test: ITestimonial) => () => (
  <article key={`${test.client}Testimony`} className="testimonial">
    <p className="testimonial__body">{test.body}</p>
  </article>
);

export default (props: any) => (
  <React.Fragment>
    {testimonials.map(test => (
      <Route
        key={`${test.key}`}
        path={`/testimonials/${test.key}`}
        render={mainImg(test.img)}
      />
    ))}

    <main className="testimonials">
      <nav className="testimonials__nav">
        {testimonials.map(test => (
          <NavLink key={`${test.key}NavLink`} to={`/testimonials/${test.key}`}>
            {test.client}
          </NavLink>
        ))}
      </nav>

      <Switch>
        {testimonials.map(test => (
          <Route
            key={`${test.key}`}
            path={`/testimonials/${test.key}`}
            render={testimonial(test)}
          />
        ))}
        <Redirect
          from="/testimonials"
          to={`/testimonials/${testimonials[0].key}`}
        />
      </Switch>
    </main>
  </React.Fragment>
);
