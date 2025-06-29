import "./styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p className="text">Made with ❤️ by <a href="https://github.com/Gewinum" target="_blank" rel="noopener noreferrer">Gewinum</a></p>
                <p className="text">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
}