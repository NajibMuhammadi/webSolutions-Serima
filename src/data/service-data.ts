import { StaticImageData } from "next/image";
// home 1
// home 2
import icon_5 from "@/assets/images/icon/icon_06.svg";
import icon_6 from "@/assets/images/icon/icon_07.svg";
import icon_7 from "@/assets/images/icon/icon_08.svg";
// home 3
import icon_8 from "@/assets/images/icon/icon_32.svg";
import icon_9 from "@/assets/images/icon/icon_33.svg";
import icon_10 from "@/assets/images/icon/icon_34.svg";
import icon_11 from "@/assets/images/icon/icon_35.svg";

// data type
interface IService {
    id: number;
    icon: StaticImageData;
    title: string;
    desc: string;
    page: string;
}

const service_data: IService[] = [
    // home 1
    {
        id: 1,
        icon: icon_5,
        title: "UX/UI-design",
        desc: "Avancerade webbapplikationer byggda med Next.js eller modern ramverk för maximal prestanda och SEO.",
        page: "home-1",
    },
    {
        id: 2,
        icon: icon_6,
        title: "E-handel",
        desc: "Vi erbjuder både kompletta e-handelsplattformar och skräddarsydda lösningar. Vi ser till att din butik inte bara ser bra ut – den konverterar, är säker och lätt att administrera.",
        page: "home-1",
    },
    {
        id: 2,
        icon: icon_7,
        title: "Skräddarsydda webbapplikationer",
        desc: "När standardlösningar inte räcker till utvecklar vi specialanpassade webbtjänster och applikationer – från kundportaler och bokningssystem till interna verktyg och integrationer med externa system. Allt byggt med modern teknik och god skalbarhet.",
        page: "home-1",
    },
    // home 2
    {
        id: 5,
        icon: icon_5,
        title: "UX/UI-design",
        desc: "Avancerade webbapplikationer byggda med Next.js eller modern ramverk för maximal prestanda och SEO.",
        page: "home-2",
    },
    {
        id: 6,
        icon: icon_6,
        title: "E-handel",
        desc: "Vi erbjuder både kompletta e-handelsplattformar och skräddarsydda lösningar. Vi ser till att din butik inte bara ser bra ut – den konverterar, är säker och lätt att administrera.",
        page: "home-2",
    },
    {
        id: 7,
        icon: icon_7,
        title: "Skräddarsydda webbapplikationer",
        desc: "När standardlösningar inte räcker till utvecklar vi specialanpassade webbtjänster och applikationer – från kundportaler och bokningssystem till interna verktyg och integrationer med externa system. Allt byggt med modern teknik och god skalbarhet.",
        page: "home-2",
    },
    {
        id: 8,
        icon: icon_5,
        title: "Responsiv design",
        desc: "Vi säkerställer att din webbplats fungerar perfekt på alla skärmstorlekar – mobil, surfplatta och dator.",
        page: "home-2",
    },
    {
        id: 9,
        icon: icon_6,
        title: "SEO-optimering",
        desc: "Vi bygger din webbplats med SEO i fokus – så att du syns på Google och når rätt målgrupp.",
        page: "home-2",
    },
    {
        id: 10,
        icon: icon_7,
        title: "Webbhotell & Domän",
        desc: "Vi hjälper dig registrera domännamn och erbjuder säkert och snabbt webbhotell anpassat efter dina behov.",
        page: "home-2",
    },
    // home 3
    {
        id: 8,
        icon: icon_8,
        title: "UX/UI-design – Mer än bara snyggt. Design som gör skillnad.",
        desc: "Användarupplevelsen är avgörande – oavsett om det handlar om en publik webbplats, ett avancerat SCADA-system eller en intern Windows-applikation. Vi designar gränssnitt som förenklar, engagerar och effektiviserar – alltid med användaren i fokus.",
        page: "home-3",
    },
    {
        id: 9,
        icon: icon_9,
        title: "Från webb till industriella system – vi designar för verkligheten",
        desc: "Vår erfarenhet sträcker sig långt bortom traditionell webbdesign. Vi tar oss an komplexa användarmiljöer där designen inte bara ska vara snygg, utan också tydlig, robust och funktionell. Det kan handla om operatörspaneler i SCADA-system, administrativa gränssnitt i Windows-miljö eller interaktiva dashboards för övervakning och analys.",
        page: "home-3",
    },
    {
        id: 10,
        icon: icon_10,
        title: "Design som minskar fel, sparar tid och ökar tryggheten",
        desc: "I tekniskt avancerade miljöer där varje klick räknas, är intuitiva gränssnitt avgörande. Vi optimerar arbetsflöden, minimerar kognitiv belastning och säkerställer att användaren snabbt hittar rätt information – oavsett system eller enhet.",
        page: "home-3",
    },
    {
        id: 11,
        icon: icon_11,
        title: "Vi arbetar tätt med utveckling och slutanvändare",
        desc: "Vår designprocess är integrerad med både teknikteamet och de som faktiskt använder systemet. Genom workshops, prototyper och användartester säkerställer vi att lösningen fungerar i praktiken – inte bara på papper",
        page: "home-3",
    },
];

export default service_data;
