import { FiGithub } from "react-icons/fi"
import { FiLinkedin } from "react-icons/fi"
import { FiSend } from "react-icons/fi"
import "./header.scss"

function Header() {

    return (
        <div className="header">
            <h2 className="logo">Carragram</h2>
            <nav className="main_nav">
                <li className="main_nav_item">
                    <a href="https://github.com/carra1358?tab=repositories" target="_blank" rel="noreferrer" className="main_nav_icon" > <FiGithub /></a>
                </li>
                <li className="main_nav_item">
                    <a href="https://www.linkedin.com/in/amandine-carreno-6b218898/" target="_blank" rel="noreferrer" className="main_nav_icon"><FiLinkedin /></a>
                </li>
                <li className="main_nav_item">
                    <a href="mailto:amandinecarreno13@gmail.com" className="main_nav_icon"><FiSend /> </a>
                </li>
            </nav>
        </div>
    )
}

export default Header;