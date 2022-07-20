import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"
import "./modal.scss"
// eslint-disable

function Modal({ title, description, pictures, github, deploy, link, type }) {

    const [index, setIndex] = useState(0)
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    console.log(deploy, link)

    return (
        <>
            {type === "projects" ?
                <div className="modal">
                    {
                        pictures ?
                            <div className="picture_container">
                                {
                                    index === 0 ? null :
                                        <div onClick={() => setIndex(index - 1)} className="picture_nav_left"><IoIosArrowDropleftCircle /></div>
                                }
                                <img src={pictures[index]} alt="screenshot" className="picture_img" />
                                {
                                    index === pictures.lenght - 1 ?

                                        <div onClick={() => setIndex(index + 1)} className="picture_nav_right"><IoIosArrowDroprightCircle /></div> : null
                                }
                            </div> :
                            <div className="picture_container">{title}</div>
                    }
                    <div className="modal_text">
                        <h2 className="modal_title">{title}</h2>
                        <ul className="modal_description_list">
                            {description.map(el => <li key={el}>{el}</li>)
                            }</ul>
                        <div className="modal_link">
                            <a href={github} target="_blank" rel="noreferrer" >Go to the repository <IoIosArrowRoundForward /></a>
                        </div>
                        {
                            deploy === true ?
                                <div className="modal_link"><a href={link} target="_blank" rel="noreferrer">Go to the deployed project <IoIosArrowRoundForward /></a> </div> :
                                <div className="modal_link"><p>Project available only on Github</p></div>
                        }

                    </div>
                </div>
                :
                <div className="modal">
                    {
                        pictures ?
                            <div className="picture_container">
                                {
                                    index === 0 ? null :
                                        <div onClick={() => setIndex(index - 1)} className="picture_nav_left"><IoIosArrowDropleftCircle /></div>
                                }
                                <img src={pictures[index]} alt="screenshot" className="picture_img" />
                                {
                                    index === pictures.length - 1 ? null :

                                        <div onClick={() => setIndex(index + 1)} className="picture_nav_right"><IoIosArrowDroprightCircle /></div>
                                }
                            </div> :
                            <div className="picture_container no_pic" style={{ backgroundColor: "rgb(" + red + "," + blue + "," + green + ")" }}>{title}</div>
                    }
                    <div className="modal_text">
                        <h2 className="modal_title">{title}</h2>
                        <p className="modal_description">{description}</p>

                    </div>
                </div>
            }
        </>

    )
}

export default Modal