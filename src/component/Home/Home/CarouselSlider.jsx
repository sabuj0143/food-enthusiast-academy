import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './CarouselSlider.css'

import img1 from '../../../../public/images/slider-1 (2).jpg'
import img2 from '../../../../public/images/slider-2 (2).jpg'
import img3 from '../../../../public/images/slider-3 (2).jpg'
import img4 from '../../../../public/images/slider-3 (2).jpg'

import { EffectFade, Navigation, Pagination } from "swiper";

const CarouselSlider = () => {
    return (
        <div className="my-4">
             <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default CarouselSlider;