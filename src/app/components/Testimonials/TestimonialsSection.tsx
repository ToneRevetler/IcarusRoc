import { IoMdQuote } from "react-icons/io";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Uma página otimizada para conversão, focada em apresentar seu produto ou serviço de forma clara e atrativa. Ideal para campanhas e lançamentos.Uma página otimizada para conversão, focada em apresentar seu produto ou serviço de forma clara e atrativa. Ideal para campanhas e lançamentos.",
      author: "Leonardo Marconi",
    },
    {
      id: 2,
      quote:
        "Uma página otimizada para conversão, focada em apresentar seu produto ou serviço de forma clara e atrativa. Ideal para campanhas e lançamentos.Uma página otimizada para conversão, focada em apresentar seu produto ou serviço de forma clara e atrativa. Ideal para campanhas e lançamentos.",
      author: "Leonardo Marconi",
    },
    {
      id: 3,
      quote:
        "Uma página otimizada para conversão, focada em apresentar seu produto ou serviço de forma clara e atrativa. Ideal para campanhas e lançamentos.Uma página otimizada para conversão, focada em apresentar seu produto ou serviço de forma clara e atrativa. Ideal para campanhas e lançamentos.",
      author: "Leonardo Marconi",
    },
    {
      id: 4,
      quote:
        "Uma página otimizada para conversão, focada em apresentar seu produto ou serviço de forma clara e atrativa. Ideal para campanhas e lançamentos.Uma página otimizada para conversão, focada em apresentar seu produto ou serviço de forma clara e atrativa. Ideal para campanhas e lançamentos.",
      author: "Leonardo Marconi",
    },
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto container px-4 md:px-0 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-icarus-dark-blue">
          One platform,{" "}
          <span className="text-[#FFB703]">four powerful </span>use cases
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Junte-se a melhor e menor companhia de sites de Indaiatuba/SP
        </p>
      </div>

      <div className="flex overflow-x-auto snap-mandatory snap-x md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="border border-gray-400 rounded-lg p-6 flex flex-col min-w-full sm:min-w-auto snap-center"
          >
            <IoMdQuote className="text-[#FFB703] text-5xl mb-2" />
            <p className="text-gray-600 flex-grow">{testimonial.quote}</p>
            <div className="mt-4 pt-4 border-t border-gray-300">
              <p className="font-medium text-gray-700">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
