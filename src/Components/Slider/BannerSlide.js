import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { movieData } from "../../Datas";
const BannerSlide = () => {
  const settings = {
    className: "",
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <>
      {movieData.length > 0 ? (
        <>
          <div className="slider-container">
            <Slider {...settings}>
              {movieData.map((currItem, index) => {
                return (
                  <>
                    <div className="row">
                      <div className="col-md-4 col-lg-4 d-flex align-items-center">
                        <div className="movie_content p-5">
                          <h2>{currItem.title}</h2>
                          <div className="description">
                            <p>{currItem.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-8">
                        <img src={currItem.image} className="img-fluid" />
                      </div>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default BannerSlide;
