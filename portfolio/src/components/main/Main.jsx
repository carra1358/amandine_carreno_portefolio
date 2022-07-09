import { useState } from "react"
import Card from "./Card"
import "./main.scss"

function Main(data) {

    const [categorie, setCategorie] = useState("PROJECTS")
    const handleNavigation = (column) => {
        setCategorie(column)
    }

    const getContent = [...data.data.filter(content => content.type === categorie.toLocaleLowerCase())]
    console.log(getContent)
    return (
        <div>
            <div className="second_nav_container">
                <div className="decorator"></div>
                <nav className="second_nav">
                    <li className="second_nav_item" style={categorie === "PROJECTS" ? { borderTop: "1px solid black", color: "black" } : null} onClick={(e) => handleNavigation("PROJECTS")}>PROJECTS</li>
                    <li className="second_nav_item" style={categorie === "SKILLS" ? { borderTop: "1px solid black", color: "black" } : null} onClick={(e) => handleNavigation("SKILLS")}>SKILLS</li>
                    <li className="second_nav_item" style={categorie === "EDUCATION" ? { borderTop: "1px solid black", color: "black" } : null} onClick={(e) => handleNavigation("EDUCATION")}>EDUCATION</li>
                    <li className="second_nav_item" style={categorie === "INTERESTS" ? { borderTop: "1px solid black", color: "black" } : null} onClick={(e) => handleNavigation("INTERESTS")}>INTERESTS</li>
                </nav>
            </div>
            <div className="main_content">
                {
                    getContent.map(el => <Card data={el} key={el.id} />)
                }
            </div>
        </div>
    )
}

export default Main