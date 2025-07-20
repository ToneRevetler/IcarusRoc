import { IoMdQuote } from "react-icons/io";

export default function TestimonialsSection() {
const testimonials = [
  {
    id: 1,
    quote:
      "O atendimento da Icarus Roc me surpreendeu desde o primeiro contato. O site que eles criaram não só reflete minha marca, mas converte muito mais. Foi como ver minha ideia ganhar forma, com suporte real e sem enrolação.",
    author: "Geraldo Antonio – Consultor de Marketing",
  },
  {
    id: 2,
    quote:
      "Trabalhar com a Icarus foi como ter uma equipe de tecnologia dentro do meu negócio. A landing page ficou incrível, moderna e rápida. A comunicação foi simples, direta e humana. Recomendo de olhos fechados!",
    author: "Amanda Costa – Empreendedora",
  },
  {
    id: 3,
    quote:
      "Minha loja virtual precisava de vida. Eles entenderam meu público e criaram uma experiência fluida. E o melhor: mesmo depois da entrega, o suporte foi constante. Essa atenção faz toda diferença!",
    author: "Carlos Ramos – Varejo Online",
  },
  {
    id: 4,
    quote:
      "Precisávamos de uma solução sob medida para integrar sistemas internos com nosso CRM. A Icarus não só entregou com excelência como nos ensinou a manter tudo funcionando. Parceria que virou confiança!",
    author: "Letícia Mendes – Gerente de Projetos",
  },
];


  return (
    <section className="py-12 max-w-7xl mx-auto container px-4 md:px-0 lg:px-8" id="depoimentos">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-icarus-dark-blue">
          Uma Plataforma {" "}
          <span className="text-[#FFB703]">Soluões Poderosas</span> Personalizadas
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
