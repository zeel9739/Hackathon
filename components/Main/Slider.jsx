import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import forth from "../../Images/4.svg";
import fifth from "../../Images/5.svg";
import six from "../../Images/6.svg";
import { Navigate } from "react-router-dom";

const Slider = () => {
  return (
    <Carousel
      autoPlay='true'
      showArrows={false}
      swipeable={true}
      emulateTouch={false}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      centerMode={true}
      centerSlidePercentage={97}
      interval={1500}
    >

      <div>
        <img src={forth} alt='' />
      </div>

     
      <div>
        <img src={fifth} alt='' />
      </div>
      <div>
        <img src={six} alt='' />
      </div>
    </Carousel>
  );
};

export default Slider;
