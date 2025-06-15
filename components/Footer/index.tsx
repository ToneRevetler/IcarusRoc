export default function Footer() {
    return (
        <footer className="footer-bg text-white py-8">
            <section className="container max-w-7xl mx-auto px-4 flex flex-col items-center space-y-8">

                {/* Linha 1: Logo alinhada com a primeira coluna */}
                <div className="w-full flex justify-start">
                    <img src="/assets/Icarus_Logo_Light.png" alt="Icarus Roc Logo" className="w-22 h-24" />
                </div>

                {/* Linha 2: Textos alinhados e espaçados */}
                <div className="w-full grid grid-cols-6 justify-between gap-4 text-icarus-dark-blue">
                    <div className="flex flex-col items-start w-full sm:w-1/5">
                        <a href="#" className="hover:text-gray-500 transition ">Feature</a>
                        <a href="#" className="hover:text-gray-500 transition  mt-2">Feature</a>
                    </div>

                    <div className="flex flex-col items-start w-full    sm:w-1/5">
                        <a href="#" className="hover:text-gray-500 transition ">Feature</a>
                        <a href="#" className="hover:text-gray-500 transition  mt-2">Feature</a>
                    </div>

                    <div className="flex flex-col items-start w-full sm:w-1/5">
                        <a href="#" className="hover:text-gray-500 transition ">Feature</a>
                        <a href="#" className="hover:text-gray-500 transition  mt-2">Feature</a>
                    </div>

                    <div className="flex flex-col items-start w-full sm:w-1/5">
                        <a href="#" className="hover:text-gray-500 transition ">Feature</a>
                        <a href="#" className="hover:text-gray-500 transition  mt-2">Feature</a>
                    </div>

                    <div className="row-start-1 row-end-2 col-start-5 col-end-7  w-full sm:w-3/5">
                        <span className="text-gray-500 transition ">"With this level of service, I'm sure I'll be a long and happy customer with Yola."
                          <br />  — Helena, Gozo, Malta</span>
                    </div>
                </div>

                {/* Linha 3: Texto único alinhado ao centro */}
                <div className="w-full text-left flex gap-4 text-icarus-dark-blue text-sm py-8 border-gray-300 border-t">
                    © 2025 Icarus Roc Inc. All rights reserved.
                    <a href="#" className="hover:text-gray-500 underline transition">Privacy Policy</a> |
                    <a href="#" className="hover:text-gray-500 underline transition">Terms of Service</a> |
                    <a href="#" className="hover:text-gray-500 underline transition">Data Processing</a>
                </div>

            </section>
        </footer>
    );
}
