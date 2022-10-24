import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slider.scss";

const Slider = () => {
  const slideImages = [
    {
      url: "https://solicitors-static.leavingstone.club/Screen-Shot-2022-10-19-at-11-09-44-adc127c9.png",
      caption: "1 / 1",
    },
    {
      url: "https://solicitors-static.leavingstone.club/Screen-Shot-2022-10-19-at-11-09-01-750fb495.png",
      caption: "2 / 2",
    },
    {
      url: "https://solicitors-static.leavingstone.club/P1010177-07bc9b1e-87512678.jpeg",
      caption: "3 / 3",
    },
  ];

  return (
    <div className="slider">
      <Slide
        duration="1516000"
        arrows="false"
        autoplay="false"
        transitionDuration="300"
      >
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              className="slide_item"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <div className="inner_slide">
                <h1>განათლების, ჯანდაცვისა და სოციალური დაცვის სფეროების</h1>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
