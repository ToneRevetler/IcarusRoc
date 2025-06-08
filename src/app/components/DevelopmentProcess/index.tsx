import Image from "next/image";

export default function DevelopmentProcessSection() {
  return (
    <section className="bg-white py-14 px-4 md:px-10" id="como-funciona">
      <div className="max-w-7xl mx-auto">
        {/* Título e texto inicial */}
        <h3 className="text-sm md:text-base tracking-widest text-gray-500 uppercase mb-2">Agência de Sites</h3>
        <h2 className=" text-3xl md:text-4xl font-bold text-[#023047] mb-4">
          Como Funciona o <span className="text-[#FFB703]"><br />Desenvolvimento de Sites</span>
        </h2>
        <p className="text-gray-700 max-w-3xl mb-12 text-sm md:text-lg">
          Nosso núcleo de criação de sites é formado por especialistas com experiência internacional em diferentes plataformas.
          Como uma boutique, oferecemos um serviço 100% personalizado que inicia com a aprovação dos layouts da homepage e páginas internas antes de seguir para a programação. Confira aqui algumas destas etapas:
        </p>

        {/* Linha do tempo */}
        <div className="mx-auto w-full flex justify-center">
          <picture>
            <source
              srcSet="/assets/processo-projeto-mobile.png"
              media="(max-width: 768px)"
            />
            <Image
              src="/assets/processo-projeto.png"
              alt="Processo de desenvolvimento de sites"
              width={1400}
              height={800}
              className="w-full h-auto object-cover"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
