

const BannerCard = ({ title, subtitle, image, alt }) => (
  <div
    className="relative h-50 w-full rounded-xl overflow-hidden bg-gray-200"
    style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 " />
    <div className="relative z-10 p-6 flex flex-col justify-center h-full">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-700">{subtitle}</p>
      <button className="mt-4 w-fit px-5 py-2 bg-[#002F34] text-white rounded-md text-sm font-medium">
        Shop Now
      </button>
    </div>
  </div>
);

export default function BannerSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-5 lg:px-30 container mx-auto py:5 lg:py-10 bg-white">
      <BannerCard
        title="Fruits & Vegetables"
        subtitle="Get Upto 30% Off"
        image={"/images/grocery-banner.png"}
        alt="Fruits and vegetables"
      />
      <BannerCard
        title="Freshly Baked Buns"
        subtitle="Get Upto 25% Off"
        image={"/images/grocery-banner-2.jpg"}
        alt="Baked buns"
      />
    </div>
  );
}
