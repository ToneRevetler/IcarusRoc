"use client"

import { useState } from "react"
import { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import { Button } from "@/../components/ui/button"
import PricingCard from "./PricingCard"

export default function PricingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const pricingCards = [
  {
    id: 0,
    title: "Landing Page Profissional",
    description:
      "Uma página otimizada para conversões, com design moderno e performance avançada. Ideal para captar leads ou apresentar seu negócio.",
    price: "R$ 997,99",
    deadline: "Prazo médio: 1 semana",
    src: "/assets/Princing card.webp",
  },
  {
    id: 1,
    title: "Rework Visual de Site",
    description:
      "Atualize o visual e usabilidade do seu site sem perder conteúdo. Mais moderno, rápido e impactante.",
    price: "R$ 690,00",
    deadline: "Prazo médio: 1 semana",
    src: "/assets/Princing card.webp",
  },
  {
    id: 2,
    title: "Loja Virtual Sob Medida",
    description:
      "Crie uma loja online com sua identidade. Planos Essencial, Profissional e Avançado adaptados ao seu negócio.",
    price: "A partir de R$ 4.990,00",
    deadline: "Prazo médio: 2 a 4 semanas",
    src: "/assets/Princing card.webp",
  },
  {
    id: 3,
    title: "Integração com Plataformas",
    description:
      "Conecte seu site a ferramentas como CRM, marketplaces, meios de pagamento e plataformas como Shopify ou WordPress.",
    price: "Sob consulta",
    deadline: "Prazo médio: até 10 dias úteis",
    src: "/assets/Princing card.webp",
  },
  {
    id: 4,
    title: "Performance e Responsividade",
    description:
      "Ajustes de desempenho para carregar mais rápido e funcionar bem em qualquer dispositivo.",
    price: "A partir de R$ 550,00",
    deadline: "Prazo médio: 2 semanas",
    src: "/assets/Princing card.webp",
  },
  {
    id: 5,
    title: "Portal de Conteúdo / Blog",
    description:
      "Criação de blog integrado com layout personalizado e foco em SEO.",
    price: "A partir de R$ 790,00",
    deadline: "Prazo médio: 2 semanas",
    src: "/assets/Princing card.webp",
  },
  {
    id: 6,
    title: "Hospedagem + Domínio",
    description:
      "Configuração completa de hospedagem e domínio com estabilidade e segurança.",
    price: "Sob consulta",
    deadline: "Prazo médio: 1 a 3 dias úteis",
    src: "/assets/Princing card.webp",
  },
  {
    id: 7,
    title: "Automação com Scripts",
    description:
      "Automatize tarefas com scripts em Python, Shell, BAT ou Bash. Agilidade para seu negócio.",
    price: "A partir de R$ 490,00",
    deadline: "Prazo sob demanda",
    src: "/assets/Princing card.webp",
  },
];


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pricingCards.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pricingCards.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }
  const getTransform = () => {
    // Mobile: show 1 card (100% per slide)
    // Desktop: show 3 cards (33.33% per slide)
    return `translateX(-${currentIndex * 100}%)`
  }

  const touchStartX = useRef<number | null>(null);
const touchEndX = useRef<number | null>(null);

const handleTouchStart = (e: React.TouchEvent) => {
  touchStartX.current = e.touches[0].clientX;
};

const handleTouchMove = (e: React.TouchEvent) => {
  touchEndX.current = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (!touchStartX.current || !touchEndX.current) return;

  const distance = touchStartX.current - touchEndX.current;

  if (distance > 50) nextSlide();     // Swipe para a esquerda
  if (distance < -50) prevSlide();    // Swipe para a direita

  // Reset
  touchStartX.current = null;
  touchEndX.current = null;
};


  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto" id="pricing-card">
      {/* Header */}
      <div className="md:text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-icarus-dark-blue">Traga seu negócio para a Icarus Roc hoje mesmo e <br /><span className="text-[#FFB703]">ganhe 1 mês de suporte grátis</span> </h2>
        <p className="text-3xl font-semibold text-[#FFB703] mb-2"></p>
        <p className="text-gray-600">Junte-se a melhor e menor companhia de sites de Indaiatuba/SP</p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-icarus-gray"
          onClick={prevSlide}
        >
          <IoChevronBack className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white"
          onClick={nextSlide}
        >
          <IoChevronForward className="h-4 w-4" />
        </Button>

        {/* Cards Container */}
        <div className="overflow-hidden mx-8 md:mx-12">
          {/* Mobile: 1 card per view */}
          <div className="md:hidden">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: getTransform() }}>
              {pricingCards.map((card) => (
                <div key={card.id} className="w-full flex-shrink-0 px-2">
                  <PricingCard
                    title={card.title}
                    description={card.description}
                    price={card.price}
                    deadline={card.deadline}
                    src={card.src}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: 3 cards per view */}
          <div className="hidden md:block">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {pricingCards.map((card) => (
                <div key={card.id} className="w-1/3 flex-shrink-0 px-3">
                  <PricingCard
                    title={card.title}
                    description={card.description}
                    price={card.price}
                    deadline={card.deadline}
                    src={card.src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {pricingCards.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 cursor-pointer rounded-full transition-colors ${index === currentIndex ? "bg-[#FFB703]" : "bg-gray-300"
                }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}