import {FaPython, FaUikit} from "react-icons/fa6";
import {FaPaintBrush} from "react-icons/fa";

export const UserData = {
    avatar: "https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/457268056_3852405298412353_4411202585809054329_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=kFvx9u_RVHIQ7kNvwGKdZh9&_nc_oc=AdktjRzFlofkmLeKcyM_QfLBvfXsK2Amtw-FyC-J0Ij9qU264DhWsBsyKM52plYC23o&_nc_zt=23&_nc_ht=scontent.ftbs5-3.fna&_nc_gid=vvJTTEi46c8xGKLRUeTXJw&oh=00_AfOWlvvi2X5xT4xShyeg9B5pePW_dKojLkzQeUrL1tm0qQ&oe=684D07D9",
    name: "Shalva Soselia",
    // {age} will be replaced with the calculated age. see ~/src/utils/ageCalculator.ts
    description: "A {age} year old student from Georgia",
    socials: {
        facebook: "https://www.facebook.com/shalva.soselia.2025",
        linkedIn: "",
        github: "",
    },
    aboutMe: {
        description: "Hello! I'm Shalva Soselia, a student from Georgia. I have a passion for programming and design, and I'm currently improving my skills in Python, UI/UX design, and graphic design. My goal is to create user-friendly applications and visually appealing designs that enhance user experiences. I'm always eager to learn and take on new challenges in the tech world.",
    },
    skills: [
        {
            title: "Python",
            description: "Proficient in Python basics, can write scripts and small applications, and understand object-oriented programming concepts",
            icon: <FaPython size={90} color="#3776AB" />
        },
        {
            title: "UI/UX Design",
            description: "Proficient in creating user-friendly interfaces and enhancing user experiences using Figma and Adobe products.",
            icon: <FaUikit size={90} color="#2396F3" />
        },
        {
            title: "Graphic Design",
            description: "Skilled in graphic design with a focus on branding and visual communication.",
            icon: <FaPaintBrush size={90} color="#FFAE1A" />
        }
    ],
    // languages are rated from 1 to 5, where 1 is beginner and 5 is fluent
    languages: [
        {
            name: "Georgian",
            level: 5,
        },
        {
            name: "English",
            level: 4,
        }
    ],
    contactMe: {
        apiKey: "bb67ce6b-d869-4f47-9791-e01540403a58",
        title: "Form from Contact Me",
    }
};