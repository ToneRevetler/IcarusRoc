// components/WhoWeAreSection.tsx
import Image from "next/image";
import { IoMdQuote } from "react-icons/io";
import CtaButton from "../CtaButton";

export default function WhoWeAreSection() {
  return (
    <section className="bg-white py-8 md:py-20 px-4 md:px-12" id="quem-somos">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Texto */}
        <div>
          <h2 className="text-3xl font-semibold text-icarus-dark-blue mb-6">
            QUEM <span className="text-[#FFB703]">SOMOS ?</span>
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            Na <strong>Icarus</strong>, acreditamos que seu site deve ter a sua cara — não só bonito, mas com identidade.
          </p>
          <p className="text-gray-700 mb-4 text-lg">
            Criamos sites rápidos, funcionais e personalizados, com um atendimento próximo e transparente. Você participa de cada etapa e vê sua ideia ganhar vida com propósito.
          </p>
          <p className="text-gray-700 mb-4 text-lg">
            Nosso diferencial? A conexão humana. Aqui, cada projeto começa com escuta e termina com algo único, feito pra você.
          </p>

          {/* Citação */}
          <div className="mb-8">
            <IoMdQuote className="text-[#FFB703] text-5xl mb-2" />
            {/* <div className="flex items-center gap-3 pt-4">
              <Image
                src="/assets/IcarusBird.png" // substituído por imagem existente
                alt="Leonardo Marconi"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-base text-gray-600">
                Leonardo Marconi | CEO atmosfera geek
              </span>
            </div> */}
          </div>

          {/* Botão */}
          <CtaButton />
        </div>

        {/* Imagem */}
        <div className="w-full">
          <Image
            src="/assets/humanizado.png" // substituído por imagem existente
            alt="Equipe da agência"
            width={700}
            height={400}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
