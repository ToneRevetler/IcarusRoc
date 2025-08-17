import Image from "next/image";
import Link from "next/link";
import HeroCard from "./HeroCard";
import CtaButton from "../CtaButton";

export default function HeroSection() {
  return (
    <section className="bg-white text-gray-900" id="hero-section">
      <div className="max-w-7xl mx-auto px-4 md:pt-16 pt-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Texto principal */}
        <div>
          <p className="md:text-xl text-gray-500 mb-4">Aprimore sua imagem virtual</p>
          <h1 className="text-3xl md:text-4xl font-bold text-icarus-dark-blue mb-4">
            Uma agência que sabe como trazer um posicionamento humano personalizado
          </h1>
          <p className=" md:text-xl text-gray-600 mb-8">
            Criamos sites, plataformas e Chatbots personalizados, do seu jeito, com a sua cara!
          </p>
          <CtaButton />
        </div>

        {/* Imagem mockup */}
        <div className="relative w-full h-full">
          <Link href="https://api.whatsapp.com/send/?phone=5519989587907&text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20fiquei%20muito%20interessado(a)%20no%20trabalho%20de%20voc%C3%AAs.%20Gostaria%20de%20conversar%20sobre%20a%20possibilidade%20de%20desenvolvermos%20algo%20juntos.%20Podemos%20agendar%20um%20hor%C3%A1rio%20para%20falar?&type=phone_number&app_absent=0">
            <Image
              src="/assets/image_test_banner_hs_red.png"
              alt="Mockup de site"
              width={600}
              height={400}
              className="w-full"
            />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-4 sm:mx-auto pb-12 grid md:grid-cols-3">
        <Link href="https://api.whatsapp.com/send/?phone=5519989587907&text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20fiquei%20muito%20interessado(a)%20no%20trabalho%20de%20voc%C3%AAs.%20Gostaria%20de%20conversar%20sobre%20a%20possibilidade%20de%20desenvolvermos%20algo%20juntos.%20Podemos%20agendar%20um%20hor%C3%A1rio%20para%20falar?&type=phone_number&app_absent=0">
          <HeroCard
            title="Migre seu Site"
            description="Que tal mudar seu site para uma plataforma otimizada, rápida e segura?"
          />
        </Link>
        <Link href="https://api.whatsapp.com/send/?phone=5519989587907&text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20fiquei%20muito%20interessado(a)%20no%20trabalho%20de%20voc%C3%AAs.%20Gostaria%20de%20conversar%20sobre%20a%20possibilidade%20de%20desenvolvermos%20algo%20juntos.%20Podemos%20agendar%20um%20hor%C3%A1rio%20para%20falar?&type=phone_number&app_absent=0">
          <HeroCard
            title="Alcance novas alturas"
            description="Que tal criar uma nova identidade visual para seu negócio? Já deu uma olhada no nosso portfólio?"
          />
        </Link>

        <Link href="https://api.whatsapp.com/send/?phone=5519989587907&text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20fiquei%20muito%20interessado(a)%20no%20trabalho%20de%20voc%C3%AAs.%20Gostaria%20de%20conversar%20sobre%20a%20possibilidade%20de%20desenvolvermos%20algo%20juntos.%20Podemos%20agendar%20um%20hor%C3%A1rio%20para%20falar?&type=phone_number&app_absent=0">  
          <HeroCard
            title="Ganhe mais clientes"
            description="Otimize o seu posicionamento on-line, seja visto primeiro."
          />
        </Link>

      </div>
    </section>
  );
}