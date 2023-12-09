import React from "react";
import "../clients.css";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.jpeg";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";

const clients = () => {
  //   // init Swiper:
  //   const swiper = new Swiper(".swiper", {
  //     // configure Swiper to use modules
  //     modules: [Navigation, Pagination],
  //   });
  return (
    <section id="client-section-card">
      <div className="client-title">
        Clients I W<span className="subtitle">o</span>rked With
      </div>

      <div className="client-card-container">
        <Swiper
          className="swiper-class"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={2}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
        >
          <SwiperSlide>
            <div className="client-card">
              <div className="client-card-image">
                <img
                  width={140}
                  height={120}
                  img
                  src={client1}
                  alt="client1"
                  className="client-img1"
                />
              </div>
              <div className="clent-content">
                <h3 className="client-header">Dipto Tv</h3>
                <p className="client-description">
                  Deepto TV is a Bangladeshi Bengali-language satellite and
                  cable television channel, owned and operated by Kazi Media
                  Limited, a subsidiary of Kazi Farms Group.
                </p>
                <a href="" className="client-button">
                  view more
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-card">
              <div className="client-card-image">
                <img
                  width={140}
                  height={120}
                  img
                  src={client2}
                  alt="client2"
                  className="client-img1"
                />
              </div>
              <div className="clent-content">
                <h3 className="client-header">T sports</h3>
                <p className="client-description">
                  T Sports, also referred to as Titas Sports, is a Bangladeshi
                  sports oriented television channel owned by East West Media
                  Group, a subsidiary of Bashundhara Group.
                </p>
                <a href="" className="client-button">
                  view more
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-card">
              <div className="client-card-image">
                <img
                  width={140}
                  height={120}
                  img
                  src={client4}
                  alt="client4"
                  className="client-img1"
                />
              </div>
              <div className="clent-content">
                <h3 className="client-header3">NTV</h3>
                <p className="client-description">
                  NTV an acronym of less commonly used National Television, is a
                  Bangladeshi Bengali-language satellite and cable television
                  channel based in the BSEC.
                </p>
                <a href="" className="client-button">
                  view more
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-card">
              <div className="client-card-image">
                <img
                  width={140}
                  height={120}
                  img
                  src={client2}
                  alt="client2"
                  className="client-img1"
                />
              </div>
              <div className="clent-content">
                <h3 className="client-header">T sports</h3>
                <p className="client-description">
                  T Sports, also referred to as Titas Sports, is a Bangladeshi
                  sports oriented television channel owned by East West Media
                  Group, a subsidiary of Bashundhara Group.
                </p>
                <a href="" className="client-button">
                  view more
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <div className="client-card">
          <div className="client-card-image">
            <img
              width={140}
              height={120}
              img
              src={client1}
              alt="client1"
              className="client-img1"
            />
          </div>
          <div className="clent-content">
            <h3 className="client-header">Dipto Tv</h3>
            <p className="client-description">
              Deepto TV is a Bangladeshi Bengali-language satellite and cable
              television channel, owned and operated by Kazi Media Limited, a
              subsidiary of Kazi Farms Group.
            </p>
            <a href="" className="client-button">
              view more
            </a>
          </div>
        </div> */}
        {/* <div className="client-card">
          <div className="client-card-image">
            <img
              width={140}
              height={120}
              img
              src={client2}
              alt="client2"
              className="client-img1"
            />
          </div>
          <div className="clent-content">
            <h3 className="client-header">T sports</h3>
            <p className="client-description">
              T Sports, also referred to as Titas Sports, is a Bangladeshi
              sports oriented television channel owned by East West Media Group,
              a subsidiary of Bashundhara Group.
            </p>
            <a href="" className="client-button">
              view more
            </a>
          </div>
        </div> */}
        {/* <div className="client-card">
          <div className="client-card-image">
            <img
              width={140}
              height={120}
              img
              src={client4}
              alt="client4"
              className="client-img1"
            />
          </div>
          <div className="clent-content">
            <h3 className="client-header3">NTV</h3>
            <p className="client-description">
              NTV an acronym of less commonly used National Television, is a
              Bangladeshi Bengali-language satellite and cable television
              channel based in the BSEC.
            </p>
            <a href="" className="client-button">
              view more
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default clients;
