// deno-lint-ignore-file
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { loadLang } from "../lib/i18n.ts";
import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";

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

        <main className="bg-gray-50 min-h-screen text-gray-800">
            <header className="relative py-40 px-4 text-center overflow-hidden">
                {/* Background image blur */}
                <div
                    className="absolute inset-0 bg-cover bg-center scale-105"
                    style={{ backgroundImage: `url("/banner2.jpg")` }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 pt-8">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
                        {messages["nav-title2"]}
                    </h1>

                </div>
            </header>

            <div className="font-sans max-w-7xl mx-auto px-4">
                {/* Why Japan Camp */}
                <section class="px-4 md:px-16 py-10">
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
                <section className="px-4 md:px-16 py-16">
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

                {/* Tujuan */}
                <section className="px-4 md:px-16 py-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">{messages.tujuan_jc.title}</h2>
                    <div className="bg-gray-50 shadow-md rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="space-y-5 text-gray-700 text-lg md:text-xl leading-relaxed">
                            <p>{messages.tujuan_jc.text}</p>
                        </div>
                    </div>
                </section>

                {/* Peserta JC */}
                <section className="px-4 md:px-16 py-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">{messages.peserta_jc.title}</h2>
                    <div className="bg-gray-50 shadow-md rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                        <div className="space-y-5 text-gray-700 text-lg md:text-xl leading-relaxed">
                            <p>{messages.peserta_jc.text}</p>
                        </div>
                    </div>
                </section>

                {/* Lokasi */}
                <section className="px-4 md:px-16 py-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">{messages.lokasi.title}</h2>
                    <div className="bg-gray-50 shadow-md rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                        <div className="space-y-5 text-gray-700 text-lg md:text-xl leading-relaxed">
                            <p>{messages.lokasi.text}</p>
                        </div>
                        <div class="w-full.h-96">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.275001044993!2d95.3068816!3d5.5261562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30403ba8320e05dd%3A0xb5b41815404121fa!2sIKAFT%20USK!5e0!3m2!1sid!2sid!4v1752829395980!5m2!1sid!2sid"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            />
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
                
                <p className="mb-6 max-w-lg mx-auto">
                    {messages.contact_person.title1} : {messages.contact_person.text1}
                </p>
                <p className="mb-6 max-w-lg mx-auto">
                    {messages.contact_person.title2} : {messages.contact_person.text2}
                </p>
                <a href={`https://wa.me/${messages.contact_person.number}`} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">{messages.daftar_button}</a>
            </section>
        </main>

        {/* Footer */}
        <Footer messages={ messages } />
    </>);
};

export default Profile;