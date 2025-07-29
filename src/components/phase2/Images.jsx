import "../../styles/Images.css";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFade, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from "../../assets/forum1.jpeg";
import slide_image_2 from "../../assets/forum2.jpeg";
import slide_image_3 from "../../assets/forum3.jpeg";
import slide_image_4 from "../../assets/forum4.jpeg";
import slide_image_5 from "../../assets/forum6.jpeg";
import slide_image_6 from "../../assets/forum7.jpeg";

function Images() {
  // Logs pour vérifier les chemins d’images
  console.log("slide_image_1:", slide_image_1);
  console.log("slide_image_2:", slide_image_2);
  console.log("slide_image_3:", slide_image_3);
  console.log("slide_image_4:", slide_image_4);
  console.log("slide_image_5:", slide_image_5);
  console.log("slide_image_6:", slide_image_6);

  return (
    <div className="container">
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectFade, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>

        {/* Navigation + Pagination */}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Images;
