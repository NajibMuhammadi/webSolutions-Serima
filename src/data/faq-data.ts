export type IFaq = {
    id: string;
    title: string;
    desc: string;
    isShow?: boolean;
};

const faq_data: IFaq[] = [
    {
        id: "One",
        title: "Vad erbjuder WebSolutions Serima?",
        desc: "Vi hjälper företag att växa digitalt genom moderna, användarvänliga webbplatser. Vi erbjuder allt från enkla WordPress-sidor till avancerade webbapplikationer byggda med Next.js och andra moderna ramverk.",
        isShow: true,
    },
    {
        id: "Two",
        title: "Hur fungerar er process?",
        desc: "Vi börjar med en kostnadsfri genomgång av dina behov. Därefter föreslår vi en lösning med tydlig offert och tidsplan. Vi arbetar nära dig hela vägen – från idé till lansering och vidare.",
    },
    {
        id: "Three",
        title: "Vilka tjänster erbjuder ni?",
        desc: "Vi erbjuder UX/UI-design, CMS-lösningar, e-handel, skräddarsydda webbapplikationer, mobiloptimering, driftlösningar, samt löpande support och vidareutveckling.",
    },
    {
        id: "Four",
        title: "Erbjuder ni webbhotell och drift?",
        desc: "Ja, vi erbjuder både grundläggande och premium driftpaket med domän, e-post, CMS, säkerhet, support och regelbundna uppdateringar – allt hostat i Sverige.",
    },
    {
        id: "Five",
        title: "Vad kostar en hemsida?",
        desc: "Vi har inga färdiga paket – varje hemsida skräddarsys efter dina behov. Priset beror på funktionalitet, design och omfattning. Kontakta oss för en kostnadsfri offert.",
    },
    {
        id: "Six",
        title: "Får jag någon rabatt?",
        desc: "Ja! Just nu erbjuder vi 15% rabatt på din första beställning då Serima AB satsar på webbutveckling.",
    },
];

export default faq_data;
