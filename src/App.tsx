import './App.css';
import Header from "./components/Header.tsx";
import {UserData} from "./data/data.tsx";
import Skills from "./components/Skills.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Languages from "./components/Languages.tsx";
import Footer from "./components/Footer.tsx";
import ContactMe from "./components/ContactMe.tsx";
import {ToastContainer} from "react-toastify";
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        Aos.init({
            duration: 900,
            once: true,
        });
    }, []);

    return (
        <>
            <ToastContainer />
            <Header
                name={UserData.name}
                description={UserData.description}
                avatar={UserData.avatar}
                socials={UserData.socials}
            />
            <main>
                <AboutMe description={UserData.aboutMe.description} />
                <Languages languages={UserData.languages} />
                <Skills skills={UserData.skills} />
                <ContactMe apiKey={UserData.contactMe.apiKey} title={UserData.contactMe.title} />
            </main>
            <Footer />
        </>
    )
}

export default App
