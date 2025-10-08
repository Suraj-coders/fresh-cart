import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

const products = [
  {
    id: 1,
    name: "Haldiram's Sev Bhujia",
    category: "Snack & Munchies",
    price: 21.6,
    originalPrice: 24,
    image: "/products/product-img-1.jpg",
    badge: "Sale",
    discount: "10%",
  },
  {
    id: 2,
    name: "NutriChoice Digestive",
    category: "Bakery & Biscuits",
    price: 24,
    originalPrice: 24,
    image: "/products/product-img-2.jpg",
  },
  {
    id: 3,
    name: "Cadbury 5 Star Chocolate",
    category: "Bakery & Biscuits",
    price: 35,
    originalPrice: 35,
    image: "/products/product-img-3.jpg",
    badge: "Buy 1 Get $4.00 Off",
  },
  {
    id: 4,
    name: "Onion Flavour Potato",
    category: "Snack & Munchies",
    price: 3,
    originalPrice: 5,
    image: "/products/product-img-4.jpg",
    badge: "Hot",
    discount: "40%",
  },
   {
    id: 5,
    name: "Salted Instant Popcorn",
    category: "Instant Food",
    price: 11.7,
    originalPrice: 18,
    image: "/products/product-img-5.jpg",
    discount: "35%",
  },
  {
    id: 6,
    name: "Blueberry Greek Yogurt",
    category: "Dairy, Bread & Eggs",
    price: 14.4,
    originalPrice: 24,
    image: "/products/product-img-6.jpg",
  },
  {
    id: 7,
    name: "Britannia Cheese Slices",
    category: "Dairy, Bread & Eggs",
    price: 24,
    originalPrice: 24,
    image: "/products/product-img-7.jpg",
  },
  {
    id: 8,
    name: "Kellogg's Original Cereals",
    category: "Instant Food",
    price: 29.75,
    originalPrice: 35,
    image: "/products/product-img-8.jpg",
    discount: "15%",
  },
  {
    id: 9,
    name: "Slurrp Millet Chocolate",
    category: "Snack & Munchies",
    price: 0,
    originalPrice: 0,
    image: "/products/product-img-9.jpg",
  },
  {
    id: 10,
    name: "Amul Butter - 500 g",
    category: "Dairy, Bread & Eggs",
    price: 13.5,
    originalPrice: 18,
    image: "/products/product-img-10.jpg",
    discount: "25%",
  },
  {
    id: 11,
    name: "Nestlé Milkmaid",
    category: "Dairy, Bread & Eggs",
    price: 19.9,
    originalPrice: 24,
    image: "/products/product-img-1.jpg",
    discount: "20%",
  },
  {
    id: 12,
    name: "Bourbon Chocolate Biscuits",
    category: "Bakery & Biscuits",
    price: 10,
    originalPrice: 12,
    image: "/products/product-img-2.jpg",
    discount: "17%",
  },
  {
    id: 13,
    name: "Haldiram's Sev Bhujia",
    category: "Snack & Munchies",
    price: 21.6,
    originalPrice: 24,
    image: "/products/product-img-1.jpg",
    badge: "Sale",
    discount: "10%",
  },
  {
    id: 14,
    name: "NutriChoice Digestive",
    category: "Bakery & Biscuits",
    price: 24,
    originalPrice: 24,
    image: "/products/product-img-2.jpg",
  },
  {
    id: 15,
    name: "Cadbury 5 Star Chocolate",
    category: "Bakery & Biscuits",
    price: 35,
    originalPrice: 35,
    image: "/products/product-img-3.jpg",
    badge: "Buy 1 Get $4.00 Off",
  },
 
];

const ProductCard = ({ product }) => (
  <div className="border border-gray-300 rounded-lg p-4 shadow-sm w-full max-w-xs bg-white hover:border-green-400 transition-all relative flex flex-col justify-between cursor-pointer">
    {/* Badge */}
    {product.badge && (
      <div
        className={`absolute top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded-md ${
          product.badge === "Hot" || product.badge === "Sale"
            ? "bg-red-600"
            : "bg-green-600"
        }`}
      >
        {product.badge} {product.discount && <span>{product.discount}</span>}
      </div>
    )}

    {/* Image */}
    <Image
      src={product.image}
      alt={product.name}
      width={150}
      height={150}
      className="mx-auto "
    />

    {/* Details */}
    <p className="text-gray-500 text-sm mt-2">{product.category}</p>
    <p className="text-sm font-medium mt-1">{product.name}</p>

    {/* Ratings */}
    <div className="flex items-center gap-1 mt-1">
      {[...Array(4)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400 text-sm" />
      ))}
      <span className="text-sm text-gray-600">4.3 (4)</span>
    </div>

    {/* Price + Button */}
    <div className="flex items-center justify-between mt-2">
      <div className="flex gap-1 items-center text-sm">
        <span className="font-semibold text-gray-900">${product.price}</span>
        
          <span className="line-through text-gray-400 text-sm">
            ${product.originalPrice}
          </span>
       
      </div>
      <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded flex items-center text-sm">
        <GoPlus className="text-white" />
        <span className="ml-1">Add</span>
      </button>
    </div>
  </div>
);

const PopularProducts = () => (
  <div className="px-4 md:px-10 lg:px-30 container mx-auto py-2 md:py-10">
    <h2 className="text-2xl font-semibold mb-6">Popular Products</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default PopularProducts;
