import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts"
import { loadLang } from "../lib/i18n.ts";
import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";

type Alasan = {
    judul: string;
    isi: string;
};

type Messages = {
    title: string;
    desc: string;
    pendahuluan: {
        text1: string;
        text2: string;
        text3: string;
        text4: string;
    };
    tujuan_jc: string;
    lokasi: {
        title: string;
        text: string;
    };
    kenapa_japan_camp: {
        title: string;
        description: string;
        alasan: Alasan[];
    };
};

export const handler: Handlers<Record<string, string>> = {
    async GET(_req: any, ctx: any) {
        const url = new URL(_req.url);
        const lang = url.searchParams.get("lang") ?? "id";
        const messages = await loadLang(lang);
        return ctx.render({ lang, messages });
    },
};

const Profile = ({ data }: PageProps<{ lang: string, messages: Record<string, string> }>) => {
    const { messages } = data;
    return(<>
        <head>
            <title>{messages["nav-title2"]} - {messages.title}</title>
        </head>
        <Header messages={ messages } />

        <main className="min-h-screen bg-white text-gray-800">
            <div className="font-sans">
                <header className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-12 px-4 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">{messages["nav-title2"]}</h1>
                </header>

                {/* Why Japan Camp */}
                <section class="bg-gray-50 px-4 md:px-16 py-10">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">
                    {messages.kenapa_japan_camp.title}
                    </h2>
                    <p class="text-gray-600 mb-6">{messages.kenapa_japan_camp.description}</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {messages.kenapa_japan_camp.alasan.map((item, index) => (
                        <div
                        key={index}
                        class="bg-white shadow-md rounded-lg p-6 border hover:shadow-xl transition"
                        >
                        <h3 class="text-xl font-semibold text-pink-600 mb-2">{item.judul}</h3>
                        <p class="text-gray-700">{item.isi}</p>
                        </div>
                    ))}
                    </div>
                </section>
                
                {/* Pendahuluan */}
                <section className="bg-white px-4 md:px-16 py-10">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">{messages.pendahuluan_title}</h2>
                    <div className="bg-gray-50 shadow-md rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                        <div className="space-y-5 text-gray-700 text-lg md:text-xl leading-relaxed">
                        <p>{messages.pendahuluan.text1}</p>
                        <p>{messages.pendahuluan.text2}</p>
                        <p>{messages.pendahuluan.text3}</p>
                        <p>{messages.pendahuluan.text4}</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Tujuan */}
            <section className="bg-white px-4 md:px-16 py-10">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">{messages.tujuan_jc.title}</h2>
                <div className="bg-gray-50 shadow-md rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                        <div className="space-y-5 text-gray-700 text-lg md:text-xl leading-relaxed">
                        <p>{messages.tujuan_jc.text}</p>
                    </div>
                </div>
            </section>

            {/* Lokasi */}
            <section className="bg-white px-4 md:px-16 py-10">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">{messages.lokasi.title}</h2>
                <div className="bg-gray-50 shadow-md rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                        <div className="space-y-5 text-gray-700 text-lg md:text-xl leading-relaxed">
                        <p>{messages.lokasi.text}</p>
                    </div>
                </div>
            </section>

            {/* Peserta JC */}
            <section className="bg-white px-4 md:px-16 py-10">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">{messages.peserta_jc.title}</h2>
                <div className="bg-gray-50 shadow-md rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                        <div className="space-y-5 text-gray-700 text-lg md:text-xl leading-relaxed">
                        <p>{messages.peserta_jc.text}</p>
                    </div>
                </div>
            </section>
        </main>

        {/* Footer */}
        <Footer messages={ messages } />
    </>);
};

export default Profile;