export default function Footer() {
    'use client';

    return (
        <footer className="relative w-full bg-icarus-dark-blue text-white py-10">
            <div className="mx-auto w-full max-w-7xl px-8">
                {/* Logo e grid de links */}
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <div className="flex justify-start items-center space-x-4 mb-6">
                        <img src="/assets/Icarus_Logo_Dark.png" alt="Icarus Roc Logo" className="w-20 h-auto" />
                    </div>

                    <div className="grid grid-cols-3 justify-between gap-x-6 gap-y-4 text-sm sm:text-base">
                        <ul>
                            <p className="font-semibold text-gray-300 mb-2">
                                Product
                            </p>
                            <li><a href="#" className="py-1 hover:text-gray-400 transition">Overview</a></li>
                            <li><a href="#" className="py-1 hover:text-gray-400 transition">Features</a></li>
                            <li><a href="#" className="py-1 hover:text-gray-400 transition">Solutions</a></li>
                            <li><a href="#" className="py-1 hover:text-gray-400 transition">Tutorials</a></li>
                        </ul>
                        <ul>
                            <p className="font-semibold text-gray-300 mb-2">
                                Company
                            </p>
                            <li><a href="#" className="py-1 hover:text-gray-400 transition">About us</a></li>
                            <li><a href="#" className="py-1 hover:text-gray-400 transition">Careers</a></li>
                            <li><a href="#" className="py-1 hover:text-gray-400 transition">Press</a></li>
                            <li><a href="#" className="py-1 hover:text-gray-400 transition">News</a></li>
                        </ul>
                        <ul>
                            <p className="font-semibold text-gray-300 mb-2">
                                Resource
                            </p>
                            <li><a href="#" className="py-1 hover:text-gray-400 transition">Blog</a></li>
                            <li><a href="#" className="py-1 hover:text-gray-400 transition">Newsletter</a></li>
                            <li><a href="#" className="py-1 hover:text-gray-400 transition">Events</a></li>
                            <li><a href="#" className="py-1 hover:text-gray-400 transition">Help center</a></li>
                        </ul>
                    </div>
                </div>

                {/* Frase de feedback */}
                <div className="sm:col-span-2 lg:col-span-1 text-gray-300 italic mt-10">
                    <p>
                        "Com este nível de serviço, tenho certeza de que serei um cliente longo e feliz com a Icarus."
                        <br />
                        — Geraldo, Amanda, Carlos
                    </p>
                </div>

                {/* Linha final */}
                <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 border-t border-gray-600 pt-6 md:flex-row md:justify-between text-xs sm:text-sm text-gray-400">
                    <small className="text-center">
                        © 2025 Icarus Roc Inc. Todos os direitos reservados.
                    </small>
                    <div className="flex gap-2 sm:justify-center">
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
