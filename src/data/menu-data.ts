import { IMenu } from "@/types/menu-d-t";

const menu_data: IMenu[] = [
    {
        id: 1,
        link: "/",
        title: "Hem",
    },
    {
        id: 2,
        link: "/om-oss",
        title: "Om oss",
    },
    {
        id: 3,
        link: "/#pris",
        title: "Priser",
    },
    {
        id: 4,
        link: "/service-v1",
        title: "Våra tjänster",
        dropdown: true,
        dropdown_menus: [
            { link: "/industri", title: "WebSolutions för Industri" },
            { link: "/tjanster", title: "Våra tjänster & lösningar" },
        ],
    },
    {
        id: 5,
        link: "/kontaktaoss",
        title: "Kontakta oss",
        dropdown: false,
    },
];

export default menu_data;
