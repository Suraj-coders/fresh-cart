import { GoClock } from "react-icons/go";
import { PiGiftLight } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { LiaUndoAltSolid } from "react-icons/lia";

export default function FeaturesSection() {
  const features = [
    {
      icon: <GoClock size={38} />,
      title: "10 minute grocery now",
      description:
        "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.",
    },
    {
      icon: <PiGiftLight size={38} />,
      title: "Best Prices & Offers",
      description:
        "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best prices & offers.",
    },
    {
      icon: <BsBoxSeam size={38} />,
      title: "Wide Assortment",
      description:
        "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.",
    },
    {
      icon: <LiaUndoAltSolid size={38} />,
      title: "Easy Returns",
      description:
        "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy .",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-4 md:px-10 lg:px-30 py-5 lg:py-10 bg-white container mx-auto">
      {features.map((feature, idx) => (
        <div key={idx} className="flex flex-col justify-between space-x-2">
          {/* Icon */}
          <div>
            <div className=" text-green-600 mb-2">{feature.icon}</div>
          </div>

          {/* Text */}
          <div className="mt-4">
            <h3 className=" text-[16px] text-gray-800 mb-2 font-semibold">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1 max-w-xs mb-2 font-medium">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
