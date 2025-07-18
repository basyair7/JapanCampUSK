import { useEffect, useState } from "preact/hooks";

type HeaderProps = {
    messages: Record<string, string>;
};

const changeLanguage = (lang: string) => {
    localStorage.setItem("lang", lang);
    const url = new URL(globalThis.location.href);
    url.searchParams.set("lang", lang);
    globalThis.location.href = url.toString();
};

const buttonChange = (lang: string) => {
    return(<>
        <button
            onClick={() => changeLanguage("id")}
            class={`px-2 py-1 rounded text-sm ${
                lang === "id" ? "bg-blue-600 text-white" : "hover:bg-blue-100 hover:text-blue-700"
            }`}
        >
            ID
        </button>
        |
        <button
            onClick={() => changeLanguage("ja")}
            class={`px-2 py-1 rounded text-sm ${
                lang === "ja" ? "bg-blue-600 text-white" : "hover:bg-blue-100 hover:text-blue-700"
            }`}
        >
            日本語
        </button>
    </>);
};

const link: string[] = ["/", "/profile", "#news", "#contacts"];

const Header = ({ messages }: HeaderProps) => {
    const [ scrolled, setScrolled ] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState("id");

    useEffect(() => {
        const url = new URL(globalThis.location.href);
        const langInURL = url.searchParams.get("lang");
        const langInStorage = localStorage.getItem("lang");

        if (!langInURL && langInStorage) {
            url.searchParams.set("lang", langInStorage);
            globalThis.location.href = url.toString();
            return;
        }
        
        setLang(langInURL ?? langInStorage ?? "id");
        
        const onScroll = () => setScrolled(globalThis.scrollY > 50);
        globalThis.addEventListener("scroll", onScroll);
        return() => globalThis.removeEventListener("scroll", onScroll);
    }, []);

    return (<>
        <header
            class={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
                scrolled ? "bg-white shadow text-gray-900" : "bg-transparent text-white"
            }`}
        >
            <div className="px-6 w-full">
                <div className="max-w-7x1 mx-auto py-4 flex items-center justify-between">
                    {/* Title and Logo */}
                    <a href={link[0]} className="text-x1 font-bold flex items-center gap-2">
                        <img src="/logo.png" alt="IKAFT-USK-LOGO" className="w-8 h-8 rounded-full" />
                        {messages.title}
                    </a>

                    {/* Desktop Menu */}
                    <nav className="space-x-4 text-sm sm:text-base font-medium hidden md:flex items-center">
                        <a href={link[0]} className="block hover:bg-blue-100 hover:text-blue-700 px-2 py-1 rounded text-sm">{messages["nav-title1"]}</a>

                        <a href={link[1]} className="block hover:bg-blue-100 hover:text-blue-700 px-2 py-1 rounded text-sm">{messages["nav-title2"]}</a>

                        <a href={link[2]} className="block hover:bg-blue-100 hover:text-blue-700 px-2 py-1 rounded text-sm">{messages["nav-title3"]}</a>

                        <a href={link[3]} className="block hover:bg-blue-100 hover:text-blue-700 px-2 py-1 rounded text-sm">{messages["nav-title4"]}</a>

                        {/* Language Switcher */}
                        <div className="ml-4 space-x-1">
                            {buttonChange(lang)}
                        </div>
                    </nav>

                    {/* Hamburger (mobile) */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                        className="md:hidden focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen? (
                                <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                class={`fixed top-0 left-0 h-full bg-white text-gray-900 z-40 2-64 shadow-md transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex justify-end px-4 py-4">
                    <button onClick={() => setIsOpen(false)} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path 
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <nav className="space-y-4 px-6 text-sm font-medium">
                    <a href={link[0]} className="block hover:bg-blue-100 hover:text-blue-700 px-2 py-1 rounded text-sm">{messages["nav-title1"]}</a>

                    <a href={link[1]} className="block hover:bg-blue-100 hover:text-blue-700 px-2 py-1 rounded text-sm">{messages["nav-title2"]}</a>

                    <a href={link[2]} className="block hover:bg-blue-100 hover:text-blue-700 px-2 py-1 rounded text-sm">{messages["nav-title3"]}</a>

                    <a href={link[3]} className="block hover:bg-blue-100 hover:text-blue-700 px-2 py-1 rounded text-sm">{messages["nav-title4"]}</a>

                    {/* Language Switcher */}
                    <div className="flex items-center gap-2 mt-6">
                        {buttonChange(lang)}
                    </div>
                </nav>
            </div>
        </header>
    </>);
};

export default Header;