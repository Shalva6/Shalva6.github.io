import { FaStar, FaRegStar } from "react-icons/fa";
import "./styles/languages.css";

function renderStars(level: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            i <= level
                ? <FaStar key={i} className="star filled" />
                : <FaRegStar key={i} className="star" />
        );
    }
    return stars;
}

type Props = {
    languages: {
        name: string;
        level: number; // 1 to 5
    }[];
};

export default function Languages({ languages }: Props) {
    return (
        <section data-aos="fade-up" className="languages">
            <h2 className="title">Languages</h2>
            <div className="container">
                {languages.map((lang, index) => (
                    <div className="language-row" key={index}>
                        <h3 className="language-title">{lang.name}</h3>
                        <div className="stars">{renderStars(lang.level)}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}