import { useEffect, useState } from "react"
import { GrClose } from "react-icons/gr"
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"
import Card from "./Card"
import "./main.scss"
import Modal from "./Modal"

function Main(data) {

    const [categorie, setCategorie] = useState("PROJECTS")
    const [index, setIndex] = useState(0)
    const [modal, setModal] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [pictures, setPictures] = useState(null)
    const [github, setGithub] = useState("")
    const [deploy, setDeploy] = useState("")
    const [type, setType] = useState(null)
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    const handleNavigation = (column) => {
        setCategorie(column)
    }



    const getContent = [...data.data.filter(content => content.type === categorie.toLocaleLowerCase())]


    const handleModale = (index, title, description, pictures, github, deploy, link, type) => {
        setIndex(index)
        setTitle(title)
        setDescription(description)
        setPictures(pictures)
        setGithub(github)
        setType(type)
        deploy ? setDeploy(link) : setDeploy("Project available only on github")
        setModal(true)
    }

    const handleModaleNavigationPrev = () => {

        index <= 0 ? setIndex(0) : setIndex(index - 1)
    }

    const handleModaleNavigationNext = () => {
        index < getContent.length - 1 ? setIndex(index + 1) : setIndex(getContent.length - 1)
    }


    useEffect(() => {
        setTitle(getContent[index].title)
        setDescription(getContent[index].description)
        setPictures(getContent[index].pictures)
        setGithub(getContent[index].github)
        setDeploy(getContent[index].link)
        setType(getContent[index].type)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index])

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
                    getContent.map((el, index) => {
                        const cover = el?.cover || el.title;
                        const i = index
                        return (<div className="card" onClick={() => handleModale(i, el.title, el.description, el.pictures, el.github, el.deploy, el.link, el.type)} key={el.id} ><Card data={cover} color={"rgb(" + red + "," + blue + "," + green + ")"} /></div>)
                    })
                }

                {
                    modal ? <div className="modal_overlay" >
                        <div onClick={() => setModal(false)} className="icon_container"><GrClose /></div>
                        <div className="modal_container">
                            <Modal title={title} description={description} pictures={pictures} github={github} deploy={deploy} type={type} />
                            <div className="nav_publication"> <span className="nav_publication_left" onClick={() => { handleModaleNavigationPrev() }}><IoIosArrowDropleft /></span> <span className="nav_publication_right" onClick={() => handleModaleNavigationNext()}><IoIosArrowDropright /></span></div>
                        </div>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default Main