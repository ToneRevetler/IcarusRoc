import React from 'react';
import Question from './Question';


const faqs = [
  {
    question: "O que é a Icarus Roc?",
    answer:
      "A Icarus Roc é uma agência digital especializada na criação de sites, plataformas e chatbots personalizados. Atuamos com foco em posicionamento humano e identidade visual, entregando soluções sob medida com escuta ativa e atendimento transparente.",
  },
  {
    question: "Como faço para começar?",
    answer:
      "É simples! Você pode entrar em contato pelo nosso formulário no site, enviar uma mensagem pelo WhatsApp ou por e-mail. Nossa equipe vai te acompanhar desde a ideia até a entrega, com suporte gratuito no primeiro mês.",
  },
  {
    question: "A Icarus Roc oferece suporte ao cliente?",
    answer:
      "Sim. Todos os nossos projetos incluem suporte gratuito por tempo determinado. Sites, lojas virtuais e integrações contam com acompanhamento técnico para garantir que tudo funcione com estabilidade e segurança.",
  },
  {
    question: "Quais tipos de serviço vocês oferecem?",
    answer:
      "Desenvolvemos landing pages, e-commerces sob medida, blogs, portais de conteúdo, automações com scripts, integrações com plataformas como WordPress e Shopify, além de hospedagem e configuração de domínio.",
  },
  {
    question: "Vocês atendem fora de Indaiatuba/SP?",
    answer:
      "Sim! Embora sejamos a menor e melhor companhia de sites da região, nosso atendimento é 100% online e personalizado. Atendemos clientes de todo o Brasil e até fora dele.",
  },
];


const FAQSection: React.FC = () => {
  return (
    <section className=" mx-auto flex justify-center bg-gray-300 mb-10 pb-20 pt-4 ">
      <div className='max-w-7xl w-full container px-4 md:px-0 lg:px-8'>
        <h2 className="text-3xl text-center font-bold my-8 text-icarus-dark-blue">Perguntas Frequentes </h2>
        <div className='gap-4 grid'>
          {faqs.map((faq, idx) => (
            <Question key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
