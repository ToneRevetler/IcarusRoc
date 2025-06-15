"use client"

import { useState } from "react"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import { Button } from "../ui/button"
import PricingCard from "./PricingCard"

export default function PricingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const pricingCards = [
    {
      id: 1,
      title: "Landing Page Profissional",
      description:
        "Uma página otimizada para conversão, focada em apresentar seu produto ou serviço de forma clara e atrativa. Ideal para campanhas e lançamentos.",
      price: "R$ 9999,99",
      deadline: "Prazo médio: 6 dias úteis",
      src: "/assets/Princing card.webp",
    },
    {
      id: 2,
      title: "Landing Page Profissional",
      description:
        "Uma página otimizada para conversão, focada em apresentar seu produto ou serviço de forma clara e atrativa. Ideal para campanhas e lançamentos.",
      price: "R$ 9999,99",
      deadline: "Prazo médio: 6 dias úteis",
      src: "/assets/Princing card.webp",
    },
    {
      id: 3,
      title: "Landing Page Profissional",
      description:
        "Uma página otimizada para conversão, focada em apresentar seu produto ou serviço de forma clara e atrativa. Ideal para campanhas e lançamentos.",
      price: "R$ 9999,99",
      deadline: "Prazo médio: 6 dias úteis",
      src: "/assets/Princing card.webp",
    },
    {
      id: 4,
      title: "Landing Page Profissional",
      description:
        "Uma página otimizada para conversão, focada em apresentar seu produto ou serviço de forma clara e atrativa. Ideal para campanhas e lançamentos.",
      price: "R$ 9999,99",
      deadline: "Prazo médio: 6 dias úteis",
      src: "/assets/Princing card.webp",
    },
    {
      id: 5,
      title: "Landing Page Profissional",
      description:
        "Uma página otimizada para conversão, focada em apresentar seu produto ou serviço de forma clara e atrativa. Ideal para campanhas e lançamentos.",
      price: "R$ 9999,99",
      deadline: "Prazo médio: 6 dias úteis",
      src: "/assets/Princing card.webp",
    },
  ]

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

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto" id="servicos">
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
          className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white"
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
                  <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                    {/* Card Header */}
                    <h3 className="font-semibold text-lg mb-3">{card.title}</h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{card.description}</p>

                    {/* Preview Image */}
                    <div className="mb-4">
                      <img
                        src="/placeholder.svg?height=128&width=280"
                        alt="Landing page preview"
                        className="w-full h-32 object-cover rounded-lg border border-gray-200"
                      />
                    </div>

                    {/* Pricing */}
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">A partir de</p>
                      <p className="text-xl text-icarus-dark-blue font-bold mb-2">{card.price}</p>
                      <p className="text-xs text-gray-500">{card.deadline}</p>
                    </div>
                  </div>
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
