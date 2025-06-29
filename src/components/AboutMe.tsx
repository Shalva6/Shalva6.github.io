import "./styles/aboutme.css";

type Props = {
    description: string;
}

export default function AboutMe(props: Props) {
    return (
        <section data-aos="fade-up" className="about-me">
            <h2 className="title">About Me</h2>
            <p className="description">
                {props.description}
            </p>
        </section>
    );
}