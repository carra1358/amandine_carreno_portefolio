import "./bio.scss"

function Bio({ src }) {
    return (
        <div className="bio">
            <div className="profile_picture">
                <img src={src} alt="" className="picture" />
            </div>
            <div className="bio_container">
                <div className="bio_title">
                    <h1>Carreno_Amandine</h1>
                    <button className="bio_button">Download resume</button>
                </div>

            </div>
            <div className="bio_content">
                Front End developer{<br />}
                Currently saying yes to new adventures β¨β¨β¨β¨{<br />}
                Speak π«π· πΊπΈ{<br />}
                Ideally Full-remote{<br />}
                Ok to relocate Barcelona  βοΈ Paris π₯  Marseille β΄ {<br />}
            </div>

        </div>
    )
}

export default Bio;