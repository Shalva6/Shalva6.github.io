import "./styles/contactme.css";
import {toast} from "react-toastify";
import * as React from "react";

type Props = {
    apiKey: string;
    title: string;
};

export default function ContactMe(props: Props) {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        data.append("access_key", props.apiKey);
        data.append("subject", props.title);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: data,
        });

        if (res.ok) {
            toast.success("Your message has been sent successfully!");
            form.reset();
        } else {
            toast.error("Unfortunately, there was an error while sending your message. Please try again");
        }
    };
    return (
        <section data-aos="fade-up" className="contact-me">
            <h2 className="title">Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value={props.apiKey} />

                <label htmlFor="name">Enter your name</label>
                <input type="text" name="name" required />
                <label htmlFor="email">Enter your email</label>
                <input type="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea name="message" required></textarea>

                <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />

                <button type="submit">Send</button>
            </form>
        </section>
    );
}