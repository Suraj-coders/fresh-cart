'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const categories = [
  { id: 1, name: 'Baby Care', image: '/images/categories/category-baby-care.jpg' },
  { id: 2, name: 'Chicken, Meat & Fish', image: '/images/categories/category-chicken-meat-fish.jpg' },
  { id: 3, name: 'Cleaning Essentials', image: '/images/categories/category-cleaning-essentials.jpg' },
  { id: 4, name: 'Pet Care', image: '/images/categories/category-pet-care.jpg' },
  { id: 5, name: 'Fruits & Vegetables', image: '/images/categories/category-fruits-vegetables.jpg' },
  { id: 6, name: 'Cold Drinks & Juices', image: '/images/categories/category-cold-drinks-juices.jpg' },
  { id: 7, name: 'Dairy, Bread & Eggs', image: '/images/categories/category-dairy-bread-eggs.jpg' },
  { id: 8, name: 'Snacks & Munchies', image: '/images/categories/category-snack-munchies.jpg' },
  { id: 9, name: 'Bakery & Biscuits', image: '/images/categories/category-bakery-biscuits.jpg' },
  { id: 10, name: 'Instant Food', image: '/images/categories/category-instant-food.jpg' },
  { id: 11, name: 'Tea, Coffee & Drinks', image: '/images/categories/category-tea-coffee-drinks.jpg' },
  { id: 12, name: 'Atta, Rice & Dal', image: '/images/categories/category-atta-rice-dal.jpg' },
];

export default function FeaturedCategories() {
  return (
    <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Title and Navigation */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Featured Categories</h2>
      
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div className="w-full h-[200px] border border-gray-200 rounded-lg py-5 px-3 flex flex-col items-center justify-center text-center hover:border-green-500 hover:shadow-md transition-all bg-white cursor-pointer">
              <Image
                src={cat.image}
                alt={cat.name}
                width={100}
                height={100}
                className="object-contain h-[100px] mb-3"
              />
              <p className="text-gray-700 font-medium text-sm truncate w-full">{cat.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='hidden  absolute lg:flex gap-2 top-0 right-8 z-10'>
        <button  className='text-4xl  text-gray-400 cursor-pointer hover:text-green-500' ><IoIosArrowDropleftCircle /></button>
        <button  className=' text-4xl  text-gray-400 cursor-pointer hover:text-green-500'><IoIosArrowDroprightCircle /></button>


     </div>

      {/* Mobile Nav Arrows Hidden / Swiper styling */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #4b5563;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          display: none;
        }

        /* Remove horizontal scrollbar */
        .swiper {
          overflow: hidden !important;
        }

        /* Hide arrows on mobile */
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
