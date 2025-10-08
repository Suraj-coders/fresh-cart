import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-900 mt-10 pb-5">
      <div className="max-w-7xl mx-auto container px-4 md:px-8 lg:px-10  pt-10 lg:pt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-6">
        {/* Categories */}
        <div>
          <h4 className="font-semibold  mb-4">Categories</h4>
          <ul className="space-y-2 text-gray-600 text-sm ">
            <li className='hover:text-green-600 cursor-pointer'>Vegetables & Fruits</li>
            <li className='hover:text-green-600 cursor-pointer'>Breakfast & instant food</li>
            <li className='hover:text-green-600 cursor-pointer'>Bakery & Biscuits</li>
            <li className='hover:text-green-600 cursor-pointer'>Atta, rice & dal</li>
            <li className='hover:text-green-600 cursor-pointer'>Sauces & spreads</li>
            <li className='hover:text-green-600 cursor-pointer'>Organic & gourmet</li>
            <li className='hover:text-green-600 cursor-pointer'>Baby care</li>
            <li className='hover:text-green-600 cursor-pointer'>Cleaning essentials</li>
            <li className='hover:text-green-600 cursor-pointer'>Personal care</li>
          </ul>
        </div>
        <div>
            <h4 className="font-semibold  mb-4">Mega Menu</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className='hover:text-green-600 cursor-pointer'>Dairy, bread & eggs</li>
            <li className='hover:text-green-600 cursor-pointer'>Cold drinks & juices</li>
            <li className='hover:text-green-600 cursor-pointer'>Tea, coffee & drinks</li>
            <li className='hover:text-green-600 cursor-pointer'>Masala, oil & more</li>
            <li className='hover:text-green-600 cursor-pointer'>Chicken, meat & fish</li>
            <li className='hover:text-green-600 cursor-pointer'>Paan corner</li>
            <li className='hover:text-green-600 cursor-pointer'>Pharma & wellness</li>
            <li className='hover:text-green-600 cursor-pointer'>Home & office</li>
            <li className='hover:text-green-600 cursor-pointer'>Pet care</li>
          </ul>
        </div>

        {/* Get to know us */}
        <div>
          <h4 className="font-semibold mb-4">Get to know us</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className='hover:text-green-600 cursor-pointer'>Company</li>
            <li className='hover:text-green-600 cursor-pointer'>About</li>
            <li className='hover:text-green-600 cursor-pointer'>Blog</li>
            <li className='hover:text-green-600 cursor-pointer'>Help Center</li>
            <li className='hover:text-green-600 cursor-pointer'>Our Value</li>
          </ul>
        </div>

        {/* For Consumers */}
        <div>
          <h4 className="font-semibold mb-4">For Consumers</h4>
          <ul className="space-y-2 text-gray-600 text-sm ">
            <li className='hover:text-green-600 cursor-pointer'>Payments</li>
            <li className='hover:text-green-600 cursor-pointer'>Shipping</li>
            <li className='hover:text-green-600 cursor-pointer'>Product Returns</li>
            <li className='hover:text-green-600 cursor-pointer'>FAQ</li>
            <li className='hover:text-green-600 cursor-pointer'>Shop Checkout</li>
          </ul>
        </div>

        {/* Become a Shopper */}
        <div>
          <h4 className="font-semibold mb-4">Become a Shopper</h4>
          <ul className="space-y-2 text-gray-600 text-sm ">
            <li className='hover:text-green-600 cursor-pointer'>Shopper Opportunities</li>
            <li className='hover:text-green-600 cursor-pointer'>Become a Shopper</li>
            <li className='hover:text-green-600 cursor-pointer'>Earnings</li>
            <li className='hover:text-green-600 cursor-pointer' >Ideas & Guides</li>
            <li className='hover:text-green-600 cursor-pointer'>New Retailers</li>
          </ul>
        </div>

        {/* Freshcart programs */}
        <div className="md:col-span-1">
          <h4 className="font-semibold mb-4">Freshcart programs</h4>
          <ul className="space-y-2 text-gray-600 text-sm ">
            <li className='hover:text-green-600 cursor-pointer'>Freshcart programs</li>
            <li className='hover:text-green-600 cursor-pointer'>Gift Cards</li>
            <li className='hover:text-green-600 cursor-pointer'>Promos & Coupons</li>
            <li className='hover:text-green-600 cursor-pointer'>Freshcart Ads</li>
            <li className='hover:text-green-600 cursor-pointer'>Careers</li>
          </ul>
        </div>
      </div>

      {/* Payment & Footer Bottom */}
      <div className="container mx-auto mt-10 pt-6 pb-6 border-t border-gray-200 max-w-7xl  ">
        <div className="max-w-7xl mx-auto  px-10 flex flex-col md:flex-row justify-between items-center gap-4 ">
          {/* Payment Partners */}
          <div className="flex items-center gap-2 text-xs">
            <span className="font-medium">Payment Partners</span>
            <img src="/images/amazonpay.svg" alt="Amazon Pay" className="h-7 md:h-8" />
            <img src="/images/american-express.svg" alt="Amex" className="h-7 md:h-8" />
            <img src="/images/mastercard.svg" alt="MasterCard" className="h-7 md:h-8" />
            <img src="/images/paypal.svg" alt="PayPal" className="h-7 md:h-8" />
            <img src="/images/visa.svg" alt="Visa" className="h-7 md:h-8" />
          </div>

         {/* App Links */}
<div className="flex flex-col lg:flex-row md:items-center gap-2 md:gap-4 text-center">
  <p className="text-gray-900 font-medium">Get deliveries with FreshCart</p>
  <div className="flex justify-center gap-2">
    <img src="/images/appstore-btn.svg" alt="App Store" className="h-10" />
    <img src="/images/googleplay-btn.svg" alt="Google Play" className="h-10" />
  </div>
</div>

        </div>
      </div>

      {/* Copyright & Social */}
      <div className="max-w-7xl container  mx-auto px-10 py-6 flex flex-col lg:flex-row justify-between items-center text-xs text-gray-500  border-t border-gray-200">
        <p>© 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved. Powered by <span className="text-green-500">Codescandy</span>.</p>
        <div className="flex space-x-4 mt-2 md:mt-0 items-center">
            <p className='text-gray-600 font-semibold'>Follow us on</p>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
}
