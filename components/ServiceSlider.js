import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper';

// icons
import {
  RxArrowTopLeft,
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from 'react-icons/rx';

// framermotion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spacesBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spacesBetween: 15,
        },
      }}
      FreeMode={true}
      pagination={{
        clickable: true,
      }}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((items, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,132,0.15)] h-max rounded-lg px-6 py-8
              flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer"
            >
              {/* icons */}
              <div>ivons</div>

              {/* title and description */}

              <div>
                <div>{items.title}</div>
                <p>{items.description}</p>
              </div>
              <div>
                {/* arrow */}
                <div>
                  <RxArrowTopLeft />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
