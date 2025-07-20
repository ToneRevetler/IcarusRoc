export default function Footer() {
    'use client';
    return (
        <footer className="bg-icarus-dark-blue text-white py-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col space-y-10">

                {/*ATUAL*/}
                {/* LOGO */}
                <div className="flex justify-start items-center space-x-4 mb-6">
                    <img src="/assets/Icarus_Logo_Dark.png" alt="Icarus Roc Logo" className="w-20 h-auto" />
                </div>

                {/* GRID DE LINKS E FRASE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-sm sm:text-base">

                    {/* Coluna 1 */}
                    <div className="space-y-2">
                        <a href="#" className="hover:text-gray-400 transition">Feature</a>
                        <a href="#" className="hover:text-gray-400 transition">Feature</a>
                    </div>

                    {/* Coluna 2 */}
                    <div className="space-y-2">
                        <a href="#" className="hover:text-gray-400 transition">Feature</a>
                        <a href="#" className="hover:text-gray-400 transition">Feature</a>
                    </div>

                    {/* Coluna 3 */}
                    <div className="space-y-2">
                        <a href="#" className="hover:text-gray-400 transition">Feature</a>
                        <a href="#" className="hover:text-gray-400 transition">Feature</a>
                    </div>

                    {/* Coluna 4 */}
                    <div className="space-y-2">
                        <a href="#" className="hover:text-gray-400 transition">Feature</a>
                        <a href="#" className="hover:text-gray-400 transition">Feature</a>
                    </div>

                    {/* Coluna 5 - Frase */}
                    <div className="sm:col-span-2 lg:col-span-1 text-gray-300 italic">
                        <p>
                            "Com este nível de serviço, tenho certeza de que serei um cliente longo e feliz com a Icarus."
                            <br />
                            — Geraldo, Amanda, Carlos
                        </p>
                    </div>
                </div>

                {/*ATUAL*/}


                {/* LINHA FINAL */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm text-gray-400 border-t border-gray-600 pt-6 space-y-2 sm:space-y-0 sm:space-x-4">
                    <span>© 2025 Icarus Roc Inc. Todos os direitos reservados.</span>
                    <div className="space-x-2">
                        <a href="#" className="hover:text-white underline">Privacy Policy</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white underline">Terms of Service</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white underline">Data Processing</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
