import "./styles/skills.css";
import * as React from "react";

type Props = {
    skills: {
        title: string;
        description: string;
        icon: React.ReactNode;
    }[]
}

export default function Skills(props: Props) {
    return (
        <section data-aos="fade-up" className="skills">
            <h2 className="title">Skills</h2>
            <div className="skills-container">
                {
                    props.skills.map((skill, i) => {
                        return (
                            <div className="skill" key={i}>
                                {skill.icon}
                                <h3 className="skill-title">{skill.title}</h3>
                                <p className="skill-description">{skill.description}</p>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}