import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components with proper TypeScript annotations
const NextArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block",}} // You can style it as you want
    onClick={onClick}
  />
);

const PrevArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", }} // You can style it as you want
    onClick={onClick}
  />
);


interface props{
  data?:[any]

}

const Carousel: React.FC<props> = ({data}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
        <>
        {data == null?
            <>
            </>
            :
            <div className="w-3/6 h-2/3 mt-5 bg-white drop-shadow-md">
            <Slider {...settings}>
              {data.map((d:any)=>{return (
                 <div className="w-3/5 h-2/3 ">
                      <img className="mx-auto w-full max-w-xl" src={"data:image/jpeg;"+atob(d.Data)} alt="Image 2" /> {/* Corrected the image source */}
                  </div>
              )})}
           
              </Slider>
            </div>
          }
        </>
  );
};

export default Carousel;
