import React from "react";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  deadline: string;
  src: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, deadline, src }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
      {/* Card Header */}
      <div className="flex flex-col justify-between h-full p-4 min-h-150">
        <div className="title-desc min-h-[20px] max-h-[60px]">
          {/* Title */}
          <h3 className="font-semibold text-xl mb-3 text-icarus-dark-blue">{title}</h3>
          {/* Description */}
          <p className="text-gray-600 text-base mb-4 leading-relaxed">{description}</p>

        </div>



        {/* Preview Image */}
        <div className="imageProd min-h-[120px] max-h-[140px]">
          <div className="mb-4">
            <img
              src={src}
              alt="Landing page preview"
              className="w-full"
            />
          </div>
        </div>

        {/* Pricing */}
        <div className="pricing-pt min-h-[80px] text-center">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">A partir de</p>
            <p className="text-xl text-icarus-dark-blue font-bold mb-2">{price}</p>
            <p className="text-xs text-gray-500">{deadline}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PricingCard;
