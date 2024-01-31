
import { IoHome } from "react-icons/io5";
import { FaUserNurse } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";



export const NavMenu = [
    {
        title: "Home",
        url: "#home",
        icon: <IoHome />
    },
    {
        title: "About",
        url: "#about",
        icon: <FaUserNurse />
    },
    {
        title: "Service",
        url: "#service",
        icon: <FaServicestack />
    },
    {
        title: "Skills",
        url: "#skills",
        icon: < GiSkills />
    },
    {
        title: "Project",
        url: "#project",
        icon: < FaProjectDiagram />
    },
    {
        title: "  Contact",
        url: "#contact",
        icon: <MdOutlineContactPhone />
    },
];