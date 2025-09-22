const langFiles: Record<string, string> = {
    id: "./i18n/id.json",
    ja: "./i18n/ja.json",
    en: "./i18n/en.json",
};

const loadLang = async (lang: string): Promise<Record<string, string>> => {
    const path = langFiles[lang] || langFiles["id"];
    try {
        const text = await Deno.readTextFile(path);
        return JSON.parse(text);
    } catch (error) {
        console.error(error);
        const fallback = await Deno.readTextFile(langFiles["id"]);
        return JSON.parse(fallback);
    }
};

export { loadLang };