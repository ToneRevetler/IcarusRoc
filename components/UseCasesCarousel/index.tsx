// components/UseCasesCarousel.tsx
import { Button } from "../ui/button";

const useCases = [
  {
    title: "Boost your brand presence",
    description: "Build a strong digital identity with a modern, mobile-first website that converts visitors into customers.",
    image: "/images/usecase-1.jpg",
  },
  {
    title: "Streamline your sales",
    description: "Automate your online store and increase conversions with integrated tools.",
    image: "/images/usecase-2.jpg",
  },
  {
    title: "Launch your product fast",
    description: "Get a landing page ready in 4 days. No bureaucracy. Just results.",
    image: "/images/usecase-3.jpg",
  },
  {
    title: "Expand your audience",
    description: "Connect with your customers across channels using SEO and smart integrations.",
    image: "/images/usecase-4.jpg",
  },
];

export default function UseCasesCarousel() {
  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">One platform, four powerful use cases</h2>
        <p className="text-gray-500 mt-2">Junte-se à melhor e menor companhia de sites do Triângulo/SP 💫</p>
      </div>

      <div className="flex space-x-6 overflow-x-auto scrollbar-hide px-4">
        {useCases.map((useCase, index) => (
          <div key={index} className="min-w-[300px] max-w-[320px] bg-white rounded-2xl shadow-md p-4">
            <img src={useCase.image} alt={useCase.title} className="rounded-xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{useCase.description}</p>
            <Button className="w-full">Pronto para evoluir!</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
