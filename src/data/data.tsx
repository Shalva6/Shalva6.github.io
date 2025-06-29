import {FaPython, FaUikit} from "react-icons/fa6";
import {FaPaintBrush} from "react-icons/fa";

export const UserData = {
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQFUNEO1z3Ycew/profile-displayphoto-crop_800_800/B56Ze77N0KHQAI-/0/1751204553918?e=1756944000&v=beta&t=mhVc-BsVWSCCmzdL9IYyImvwbkzyhJz7omx6oluMcwA",
    name: "Shalva Soselia",
    // {age} will be replaced with the calculated age. see ~/src/utils/ageCalculator.ts
    description: "A {age} year old student from Georgia",
    socials: {
        facebook: "https://www.facebook.com/shalva.soselia.2025",
        linkedIn: "https://www.linkedin.com/in/shalva-soselia-847700361/",
        github: "https://github.com/Shalva6",
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
        apiKey: "7882e0ff-a37b-47ce-8f5f-0de8c20d6435",
        title: "Form from Contact Me",
    }
};
