import "./styles/header.css";
import {FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa6";
import CalculateAge from "../utils/ageCalculator.ts";

type Props = {
    avatar: string;
    name: string;
    description: string;
    socials: {
        facebook?: string;
        linkedIn?: string;
        github?: string;
    };
};

export default function Header(props: Props) {
    return (
        <header data-aos="fade-down" className="header">
            <img alt="user's avatar" className="avatar" src={props.avatar} />
            <h1 className="name">{props.name}</h1>
            <p className="description">{props.description.replace("{age}", CalculateAge().toString())}</p>
            <div className="socials">
                {props.socials.facebook && (
                    <a href={props.socials.facebook}>
                        <FaFacebook className="icon-circle facebook" size={48} />
                    </a>
                )}
                {props.socials.linkedIn && (
                    <a href={props.socials.linkedIn}>
                        <FaLinkedin className="icon-square linkedin" size={48} />
                    </a>
                )}
                {props.socials.github && (
                    <a href={props.socials.github}>
                        <FaGithub className="icon-circle github" size={48} />
                    </a>
                )}
            </div>
        </header>
    );
}