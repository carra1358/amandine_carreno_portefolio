import "./card.scss"

function Card({ data }) {
    const cover = data
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    return (

        <div className="card_cover">
            <div className="overlay"><p>Learn More...</p></div>
            {
                cover.includes("portfolio") ?
                    <img src={cover} className="card_img" alt="cover" /> :
                    <p className="card_text" style={{ backgroundColor: "rgb(" + red + "," + blue + "," + green + ")" }}><span>{cover}</span></p>
            }
        </div>

    )

}

export default Card;