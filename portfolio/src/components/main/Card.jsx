import { useState } from "react";
import "./card.scss"

function Card({ data }) {
    const cover = data?.cover || data.title
    const [isHover, setIsHover] = useState(false)
    return (

        <div className="card">
            {
                cover.includes("portfolio") ?
                    <img src={cover} className="card_img" alt="cover" /> :
                    <p className="card_text"><span>{cover}</span></p>
            }
        </div>

    )

}

export default Card;