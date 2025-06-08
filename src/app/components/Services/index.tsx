import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServiceCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const offset = 300;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -offset : offset,
        behavior: "smooth",
      });
    }
  };

  const services = Array(5).fill({
    title: "Landing Page Profissional",
    description:
      "Uma página otimizada para conversões, com design moderno e performance avançada. Ideal para captar leads ou apresentar seu negócio.",
    badge: "90",
    price: "R$ 999,99",
  });

  return (
    <section className="py-16 bg-white">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold">
          Traga seu negócio para a Icarus Roc hoje mesmo
          <br />
          <span className="text-[#FFB703] font-bold">
            e ganhe 1 mês de suporte grátis
          </span>
        </h2>
        <p className="text-sm mt-2 text-gray-500">
          Junte-se à melhor e menor companhia de sites do Triângulo/SP 💫
        </p>
      </div>

      <div className="relative mt-10 px-4">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10"
        >
          <ChevronLeft />
        </button>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide px-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-[280px] flex-shrink-0 border rounded-2xl shadow p-6 text-center bg-white"
            >
              <h3 className="text-sm font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-xs text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="relative w-20 h-20 mx-auto mb-4">
                <img
                  src="/score-circle.png"
                  alt="Score 90"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-green-600 font-bold text-lg">
                  {service.badge}
                </span>
              </div>
              <p className="text-sm font-semibold ">A partir de: {service.price}</p>
              <p className="text-xs text-gray-400">Prazo médio: 4 dias úteis</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
