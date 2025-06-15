export default function Footer() {
    return (
        <footer className="footer-bg text-white py-8">
            <section className="container max-w-7xl mx-auto px-4 flex flex-col items-center space-y-8 ">

                {/* Linha 1: Logo alinhada com a primeira coluna */}
                <div className="w-full flex justify-start">
                    <img src="/assets/Icarus_Logo_Light.png" alt="Icarus Roc Logo" className="w-22 h-24" />
                </div>

                {/* Linha 2: Textos alinhados e espaçados */}
                <div className="w-full gap-4 md:flex text-icarus-dark-blue pb-8 md:pb-0">
                    <div className="grid grid-cols-2 md:grid md:grid-cols-4 gap-x-8 gap-y-4 pb-8 w-4/5 items-start">
                        <a href="#" className="hover:text-gray-500 transition ">Feature</a>
                        <a href="#" className="hover:text-gray-500 transition">Feature</a>
                        <a href="#" className="hover:text-gray-500 transition">Feature</a>
                        <a href="#" className="hover:text-gray-500 transition">Feature</a>
                        <a href="#" className="hover:text-gray-500 transition">Feature</a>
                        <a href="#" className="hover:text-gray-500 transition">Feature</a>
                    </div>

                    <div className="">
                        <span className="text-gray-500 transition ">"With this level of service, I'm sure I'll be a long and happy customer with Yola."
                            <br />  — Helena, Gozo, Malta</span>
                    </div>
                </div>


            </section>
            {/* Linha 3: Texto único alinhado ao centro */}
            <div className="container max-w-7xl mx-auto px-4 text-left items-center md:flex gap-4 text-icarus-dark-blue text-sm py-8 border-gray-300 border-t">
                © 2025 Icarus Roc Inc. All rights reserved.
                <div className="flex gap-2 pt-2 md:pt-0">
                    <a href="#" className="hover:text-gray-500 underline transition">Privacy Policy</a> |
                    <a href="#" className="hover:text-gray-500 underline transition">Terms of Service</a> |
                    <a href="#" className="hover:text-gray-500 underline transition">Data Processing</a>
                </div>
            </div>
        </footer>
    );
}
