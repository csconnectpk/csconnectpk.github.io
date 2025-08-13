import {
    FaWhatsapp,
    FaDiscord,
    FaInstagram,
    FaYoutube,
    FaLinkedin,
} from "react-icons/fa";
const platforms = [
    {
        name: "WhatsApp",
        members: "3000+",
        description: "Main community hub",
        icon: FaWhatsapp,
        color: "bg-green-500",
        Hovercolor: 'hover:text-green-400',
        link: "https://chat.whatsapp.com/DFsM316EMVe2H0yiR74EqE",
    },
    {
        name: "Discord",
        members: "400+",
        description: "Real-time discussions",
        icon: FaDiscord,
        color: "bg-indigo-500",
        Hovercolor: 'hover:text-indigo-400',
        link: "https://discord.gg/gWyvnmSRRF",
    },
    {
        name: "Instagram",
        members: "150+",
        description: "Community highlights",
        icon: FaInstagram,
        color: "bg-pink-500",
        Hovercolor: 'hover:text-pink-400',
        link: "https://www.instagram.com/csconnectpk",
    },
    {
        name: "YouTube",
        members: "160+",
        description: "Educational content",
        icon: FaYoutube,
        color: "bg-red-500",
        Hovercolor: 'hover:text-red-400',

        link: "https://www.youtube.com/@csconnectpk",
    },
    {
        name: "LinkedIn",
        members: "100+",
        description: "Professional networking",
        icon: FaLinkedin,
        color: "bg-blue-700",
        HoverColor: 'hover:text-blue-400',
        link: "https://www.linkedin.com/company/csconnectpk/",
    },
];

let whatsappLink = platforms[0].link;
let discordLink = platforms[1].link;
let instagramLink = platforms[2].link;
let youtubeLink = platforms[3].link;
let linkedinLink = platforms[4].link;

export { platforms, whatsappLink, discordLink, instagramLink, youtubeLink, linkedinLink };