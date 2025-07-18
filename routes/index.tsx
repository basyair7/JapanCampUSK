// deno-lint-ignore-file
import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import { loadLang } from "../lib/i18n.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { useEffect } from "preact/hooks";

export const handler: Handlers<Record<string, string>> = {
    async GET(_req: any, ctx: any) {
        const url = new URL(_req.url);
        const lang = url.searchParams.get("lang") ?? "id";
        const messages = await loadLang(lang);
        return ctx.render({ lang, messages });
    },
};

const img_list: string[] = ["img1.jpg", "img2.jpg", "img3.jpg"];

const Home = ({ data }: PageProps<{ lang: string, messages: Record<string, string> }>) => {
    const { messages } = data;

    useEffect(() => {
        const hash = globalThis.location.hash;
        if (hash) {
        const tryScroll = () => {
            const el = document.querySelector(hash);
            if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            } else {
            setTimeout(tryScroll, 100);
            }
        };
        setTimeout(tryScroll, 100);
        }
    }, []);

    return(<>
        <head>
            <title>{messages.title}</title>
        </head>

        <Header messages={ messages }/>

        <main className="min-h-screen bg-white text-gray-800">
                {/* Hero Section */}
                <section className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-white" style={{ backgroundImage: `url("/banner.jpg")`}}>
                    {/* Overlay semi-transparant */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center px-4 animate-fade-up">
                        <img src="/logo.png" alt="logo" className="mx-auto mb-6 w-32 h-32 rounded-full shadow-lg animate-zoom-in" />

                        <h1 className="text-4x1 font-bold mb-4 drop-shadow-md">{messages.title}</h1>
                        <p className="text-lg max-w-2x1 mx-auto drop-shadow-sm">
                            {messages.desc}
                        </p>
                        <a href="#program" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-gray-50 hover:text-black transition">
                            {messages.cta}
                        </a>
                    </div>
                </section>

                <div className="font-sans max-w-7xl mx-auto px-4">
                    {/* Program Highlight */}
                    <section className="py-16" id="program">
                        <div className="container mx-auto px-4">
                            <h2 className="text-2xl font-bold text-center mb-8">{messages.program_title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {Array.isArray(messages.metode_belajar) && messages.metode_belajar.map((p) => (
                                    <div className="p-6 border rounded shadow hover:shadow-lg transition">
                                        <h3 className="text-2x1 font-semibold mb-2">{ p }</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    
                    {/* Gallery */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4 text-center">
                            <h2 className="text-2xl font-bold mb-8">{messages.title_doc}</h2>
                            <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {img_list.map((file) => (
                                    <img src={`/${file}`} alt="" className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300" />
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                {/* Call to Action */}
                <section className="bg-gray-100 py-16 text-center">
                    <h2 className="text-2x1 font-semibold mb-4">{messages.daftar_title}</h2>
                    <p className="mb-6 max-w-lg mx-auto">
                        {messages.daftar_text}
                    </p>
                    <a href="https://wa.me/+62" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">{messages.daftar_button}</a>
                </section>

        </main>
        {/* Footer */}
        <Footer messages={ messages } />
    </>);
};

export default Home;