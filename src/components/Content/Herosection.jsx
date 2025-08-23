'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    title: 'Free Shipping on orders over $100',
    subtitle:
      'Free Shipping to First-Time Customers Only, After promotions and discounts are applied.',
    tag: 'Free Shipping - orders over $100',
    image: '/images/slide-1.jpg', // full background image
    tagBg: 'bg-yellow-300',
  },
  {
    id: 2,
    title: 'SuperMarket For Fresh Grocery',
    subtitle:
      'Introduced a new model for online grocery shopping and convenient home delivery.',
    tag: 'Opening Sale Discount 50%',
    image: '/images/slide-2.jpg', // full background image
    tagBg: 'bg-yellow-300',
  },
];

export default function HeroCarousel() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 my-5 lg:my-10 overflow-hidden ">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="rounded-xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-[450px] md:h-[500px] w-full bg-cover bg-center flex items-center "
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="p-3 lg:p-6 md:p-12 max-w-xl ml-6 md:ml-12 rounded-xl ">
                <span className={`text-xs font-bold px-2 py-1 ${slide.tagBg} rounded-full`}>
                  {slide.tag}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-4">
                  {slide.title}
                </h2>
                <p className="text-gray-600 mt-2">{slide.subtitle}</p>
                <button className="bg-gray-900 text-sm flex gap-2 items-center text-white px-4 py-2 mt-4 rounded-lg hover:bg-gray-800 transition-all">
                  Show Now 
                  <FaArrowRight className='text-xs' />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom dot styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #d1d5db; /* Tailwind gray-300 */
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #22c55e; /* Tailwind green-500 */
        }
          .swiper {
      overflow: hidden !important;
    }
    ::-webkit-scrollbar {
      display: none;
    }
    body {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
      `}</style>
    </div>
  );
}
