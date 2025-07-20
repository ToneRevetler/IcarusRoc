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
    <div className="border border-gray-200 rounded-lg bg-icarus-gray shadow-md hover:shadow-lg transition-shadow flex flex-col h-full overflow-hidden" >
      
      {/* Imagem responsiva no topo */}
      <div className="w-full aspect-[3/2] overflow-hidden">
        <img
          src={src}
          alt="Preview"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col justify-between p-6 flex-1">
        {/* Título e descrição */}
        <div className="mb-4">
          <h3 className="font-semibold text-xl mb-2 text-icarus-dark-blue">{title}</h3>
          <p className="text-gray-600 text-base leading-relaxed">{description}</p>
        </div>

        {/* Preço e prazo */}
        <div className="text-center mt-auto">
          <p className="text-sm text-gray-600 mb-1">A partir de</p>
          <p className="text-xl text-icarus-dark-blue font-bold mb-1">{price}</p>
          <p className="text-xs text-gray-500">{deadline}</p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
