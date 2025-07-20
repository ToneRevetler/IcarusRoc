export default function Footer() {
    'use client';

    return (
        <footer className="relative w-full bg-icarus-dark-blue text-white py-10">
            <div className="mx-auto w-full max-w-7xl px-8">
                {/* Logo e grid de links */}
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <div className="flex justify-start items-center space-x-4 mb-6">
                        <img src="/assets/icarus-white-orange-logo.svg" alt="Icarus Roc Logo" className="w-20 h-auto" />
                    </div>

                    <div className="grid grid-cols-3 justify-between gap-x-6 gap-y-4 text-sm sm:text-base">
                        <ul>
                            <p className="font-semibold text-gray-300 mb-2">
                                Product
                            </p>
                            <li><a href="#hero-section" className="py-1 hover:text-amber-300 transition">Visão Geral</a></li>
                            <li><a href="#como-funciona" className="py-1 hover:text-amber-300 transition">Como Funciona</a></li>
                            <li><a href="#pricing-card" className="py-1 hover:text-amber-300 transition">Soluções</a></li>
                            <li><a href="#depoimentos" className="py-1 hover:text-amber-300 transition">Depoimentos</a></li>
                        </ul>
                        <ul>
                            <p className="font-semibold text-gray-300 mb-2">
                                Empresa
                            </p>
                            <li><a href="#quem-somos" className="py-1 hover:text-amber-300 transition">Sobre Nós</a></li>
                            <li><a href="#" className="py-1 hover:text-amber-300 transition">Carreira</a></li>
                            <li><a href="#" className="py-1 hover:text-amber-300 transition">Notícias</a></li>
                            <li><a href="#contato" className="py-1 hover:text-amber-300 transition">Contato</a></li>
                        </ul>
                        <ul>
                            <p className="font-semibold text-gray-300 mb-2">
                                Recursos
                            </p>
                            <li><a href="#" className="py-1 hover:text-amber-300 transition">Blog</a></li>
                            <li><a href="#" className="py-1 hover:text-amber-300 transition">Newsletter</a></li>
                            <li><a href="#faq" className="py-1 hover:text-amber-300 transition">Central de Ajuda</a></li>
                        </ul>
                    </div>
                </div>

                {/* Frase de feedback */}
                <div className="sm:col-span-2 lg:col-span-1 text-gray-300 italic mt-10">
                    <p>
                        "Uma vez que você tenha experimentado voar, você andará pela terra com seus olhos voltados para o céu, pois lá você esteve e para lá desejará voltar."<br />
                        — Leonardo da Vinci
                    </p>

                </div>

                {/* Linha final */}
                <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 border-t border-gray-600 pt-6 md:flex-row md:justify-between text-xs sm:text-sm text-gray-400">
                    <small className="text-center">
                        © 2025 Icarus Roc Inc. Todos os direitos reservados.
                    </small>
                    <div className="flex gap-2 sm:justify-center">
                        <a href="#" className="hover:text-white underline">Política de Privacidade</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white underline">Termos de Serviço</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white underline">Processamento de Dados</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
