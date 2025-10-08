import {
  FaStar,
  FaRegStar,
} from 'react-icons/fa';
import { IoEyeOutline, IoHeartOutline } from "react-icons/io5";
import { HiArrowsRightLeft } from "react-icons/hi2";

export default function DailyBestSells() {
  const items = [
    {
      category: 'Tea, Coffee & Drinks',
      title: 'Roast Ground Coffee',
      price: 13.5,
      oldPrice: 18,
      rating: 4.3,
      image: '/product-img-11.jpg',
    },
    {
      category: 'Fruits & Vegetables',
      title: 'Crushed Tomatoes',
      price: 13.5,
      oldPrice: 18,
      rating: 4.3,
      image: '/product-img-12.jpg',
    },
    {
      category: 'Fruits & Vegetables',
      title: 'Golden Pineapple',
      price: 14.4,
      oldPrice: 18,
      rating: 4.3,
      image: '/product-img-13.jpg',
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`star-${i}`} className="text-yellow-500 text-sm" />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`regstar-${i}`} className="text-yellow-500 text-sm" />
        ))}
      </>
    );
  };

  return (
    <div className="px-4 md:px-30 container mx-auto py-5 lg:py-10">
      <h2 className="text-2xl font-bold mb-6">Daily Best Sells</h2>

      {/* Scroll on mobile, grid on md+ */}
      <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible no-scrollbar scroll-smooth">
        {/* Promo Banner */}
        <div
          className="text-white p-6 rounded-xl flex-shrink-0 w-[340px] md:w-auto min-h-[450px]"
          style={{
            backgroundImage: 'url(/banner-deal.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div>
            <h3 className="text-xl font-bold leading-snug">
              100% Organic Coffee Beans.
            </h3>
            <p className="mt-2 text-sm">Get the best deal before close.</p>
            <button className="bg-[#00B853] hover:bg-green-700 text-white mt-4 px-4 py-2 rounded-md font-semibold text-sm shadow">
              Shop Now →
            </button>
          </div>
        </div>

        {/* Product Cards */}
        {items.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl p-4 group hover:border-green-600 transition relative bg-white flex-shrink-0 w-[300px] md:w-auto flex flex-col"
          >
            {/* Product Image + Hover Icons */}
            <div className="relative mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto h-40 object-contain"
              />
              <div className="absolute top-30 right-20 space-y-4 space-x-2 opacity-0 group-hover:opacity-100 transition">
                <button className="group bg-gray-500 p-2 rounded-full shadow hover:bg-green-600">
                  <IoEyeOutline size={14} className="text-gray-300 group-hover:text-white" />
                </button>
                <button className="group bg-gray-500 p-2 rounded-full shadow hover:bg-green-600">
                  <IoHeartOutline size={14} className="text-gray-300 group-hover:text-white" />
                </button>
                <button className="group bg-gray-500 p-2 rounded-full shadow hover:bg-green-600">
                  <HiArrowsRightLeft size={14} className="text-gray-300 group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="text-sm text-gray-500">{item.category}</div>
            <h3 className="font-medium text-base text-gray-800">{item.title}</h3>
            <div className="flex items-center space-x-2 mt-1 text-sm">
              <span className="text-green-600 font-semibold">${item.price}</span>
              <span className="line-through text-gray-400">${item.oldPrice}</span>
            </div>
            <div className="flex items-center mt-1 space-x-1 text-sm">
              {renderStars(item.rating)}
              <span className="text-gray-500 ml-1">{item.rating}</span>
            </div>

            {/* Add to Cart */}
            <button className="bg-green-600 hover:bg-green-700 w-full text-white mt-4 py-2 rounded-lg text-sm font-medium">
              + Add to cart
            </button>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 text-center text-xs text-gray-500 mt-4">
              <div>
                <div className="font-bold text-base">1194</div>
                Days
              </div>
              <div>
                <div className="font-bold text-base">11</div>
                Hours
              </div>
              <div>
                <div className="font-bold text-base">39</div>
                Mins
              </div>
              <div>
                <div className="font-bold text-base">56</div>
                Sec
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
