import React from "react";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import MainImage from "../components/MainImage";
import { IImageInfo } from "../types/IPageInfo";

interface ITestimonial {
  key: string;
  client: string;
  body: React.ReactElement;
  img: IImageInfo;
}

const testimonials: ITestimonial[] = [
  {
    key: "Klein",
    client: "Sarah and Bill Klein",
    body: <p>
      "You have the peace of mind that not only are they honest and fair \
      professionals, but that the subs who they hire are of the highest\
      quality and integrity."
    </p>,
    img: { src: "sanders/Sanders_Baudouin ext 07s 2.jpg" }
  },
  {
    key: "Hurwitt",
    client: "Susan and David Hurwitt",
    body: <p>
      "Nobody quite like the hometown boys Alan and Ted McFarlin. Rowayton's\
      finest builders of quality, craftsmanship, and detail. Always\
      professional, always pleasant, often humorous and a delight to work\
      with. We love the finished product."
    </p>,
    img: { src: "timmy/ETM2.jpg" }
  },
  {
    key: "Baruth",
    client: "Ruth and Kerry Baruth",
    body: <p>
      "ETM is simply marvelous! Ted McFarlin and his employees provided the\
      highest quality workmanship, creative design solutions, a willingness to\
      always make us happy, and a worry-free renovation whether we were home\
      or away.  We would hire them again without a second thought and recommend\
      them to anyone who wants the best building experience imaginable."
    </p>,
    img: { src: "kelly/001-Front_View-5688603-large.jpg" }
  },
  {
    key: "Baker",
    client: "The Bakers",
    body: <p>
      "Ted and his crew were on the site every day and he and his crew left\
      the job site clean and orderly every night. ETM worked very well with our\
      architect to collaborate on use of materials and design changes that we\n\
      made during the project. We recommend Ted to all of our friends and\
      neighbors. Ted and his crew went above and beyond to ensure\
      the project was not only built within our budget, but also to build to\
      the highest quality craftsmanship. Wendy and I are happy to have you use\
      us as references and for anyone who wants to see our home to do so. We\
      are thrilled about the project."
    </p>,
    img: { src: "timmy/ETM3.jpg" }
  },
  {
    key: "Kelly",
    client: "The Kelly's",
    body: <p>
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
      building or renovating their home."
    </p>,
    img: { src: "timmy/ETM5.jpg" }
  },
  {
    key: "Eisen",
    client: "Peggy Eisen",
    body: <p> "During my home owning career I have built four houses. Only one was \
      delivered on time and within the agreed-upon budget and that was the \
      house that Ted built. Working with Ted McFarlin, his brother Aldo, \
      and their team of subcontractors was a great experience. Ted was on \
      the job every day, he was always available for questions and consultations. \
      The end result is a home that my family and I enjoy and my neighbors admire, \
      perfectly executed. I hope that if you are considering working with Ted you \
      consider this a heartfelt recommendation."
    </p>,
    img: { src: "" }
  },
  {
    key: "Kilmurray",
    client: "Daniel Kilmurray",
    body: <p> "I have for better or worse built or renovated in excess of 15 homes in my life, and\
      briefly in my early 20's worked in the construction business. ETM Construction is far and\
      away the best team I have ever had the pleasure of working with. During the most difficult\
      period in recent history(2020-2021), Ted and team had foresight to stay in front of supply\
      orders and sub-contractor scheduling. Our job was seamless, unlike many horror stories we heard.\
      We were done and moved in within 10 months of start, which was nothing short of heroic.\
      I cannot remember many days during that time without progress; and Ted & Aldo were on the\
      job all the time. His subcontractors must also have a great degree of respect for them,\
      as their work ethic was essentially the same."
    </p>,
    img: { src: "" }
  },
  {
    key: "Legnani",
    client: "Gina and Peter Legnani",
    body: <p> "ETM Construction built our home located at 1 Bittersweet Trail in Rowayton., CT in 2010.\
      When we chose to use Ted, Aldo & his amazing team, we heard their reputation was not only about\
      building quality homes but they were also extremely efficient workers who ran a tight ship.\
      This description literally hit the nail on the head (no pun intended). Anyone who has completed\
      a renovation or built from the ground  up, understands how crucial these contractor characteristics are.\
      If you are lucky enough to work with ETM  Construction, we can assure you they will deliver top-notch\
      construction in an organized timely fashion. 12 years later, family & friends continue to compliment\
      the attention to detail and quality of our home."
    </p>,
    img: { src: "" }
  },
  {
    key: "Baudouin",
    client: "Alexandra and Richard Baudouin",
    body: <p> "ETM Construction built us a new home in Rowayton ten years ago.\
      We were very happy in the way the project was handled which was was in a professional and efficient manner.\
      We found the quality of the construction to be top notch. There are always stressful items when building new\
      home but ETM minimized the stress and were extremely easy and flexible to work with.\
      Ten years later, we’ve had no issues large or small with the construction.\
      We highly recommend ETM to anyone who is considering a construction project."
    </p>,
    img: { src: "" }
  },
  {
    key: "Coons",
    client: "Ted and Liz Coons",
    body: <p> "We hired ETM on the advice of neighbors who had built their home with Ted and team. There isn’t enough space\
      here for all the superlatives but I’ll mention the following:\n\
      1. Partnership – working with Ted is a partnership – he solicits feedback when it is required, makes extremely\
      helpful recommendations to improve the outcome of a product, and treats the architect and his subcontractors with\
      respect.  We consistently saw an “ownership mentality” in terms of how we worked together.\n\
      2. Quality – we’ve been very pleased with the build quality of our home and the house is wearing well. We are five\
      years post project completion, and Ted continues to stand by his work – if something needs to be fixed, he and his\
      subs are there for us, at no or nominal charge.\n\
      3. Value – we agreed to a budget upfront, and he stuck to it – there was never any nickel and diming.\
      It does help to have a phenomenal architect who specifies minute details.  Even when we decided,\
      outside of the original scope of the project, to “develop” the third floor, he did that quickly and efficiently,\
      and at very reasonable cost.\n\
      4. Subcontractors – a hallmark of a great contractor is the quality of the subs he/she attracts. Subs want to work\
      with GCs who give them regular, interesting work, at a reasonable price, and pay them on a timely basis.\
      Clearly subs want to work with Ted on his projects. We now have direct relationships with many of the \
      ubcontractors Ted brought to the project – HVAC, plumbing, painting, appliance, pool, sprinklers, landscaping –\
      all these subs still work at our property as required.\n\
      An experienced friend told me a while back that when you are involved in a construction project you can pick two of\
      three attributes: quality, budget, or timeliness.  While getting timing exactly right on a project is always hard,\
      the quality was as we expected and the project was delivered on original budget. In fact during the building\
      rocess, Ted identified some value engineering opportunities that saved us just a bit of money.\
      Finally Ted is local – keeping Ted and his teams busy in southwestern Fairfield County is good for our community."
    </p >,
    img: { src: "" }
  },
];

const mainImg = (img: IImageInfo) => <MainImage {...img} />;

const testimonial = (test: ITestimonial) => (
  <article key={`${test.client}Testimony`} className="testimonial">
    <p className="testimonial__body">{test.body}</p>
  </article>
);

export default () => (
  <React.Fragment>
    {testimonials.map(test => (
      <Route
        key={`${test.key}`}
        path={`/testimonials/${test.key}`}
        element={mainImg(test.img)}
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

      <Routes>
        {testimonials.map(test => (
          <Route
            key={`${test.key}`}
            path={`/testimonials/${test.key}`}
            element={testimonial(test)}
          />
        ))}
        <Navigate replace to={`/testimonials/${testimonials[0].key}`} />
      </Routes>
    </main>
  </React.Fragment>
);
