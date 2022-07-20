import "./bio.scss"


function Bio({ src }) {
    return (
        <div className="bio">
            <div className="profile_picture">
                <img src={src} alt="" className="picture" />
            </div>

            <div className="bio_title">
                <h1>Carreno_Amandine</h1>
                <a href={"https://firebasestorage.googleapis.com/v0/b/carra-portfolio-assets.appspot.com/o/cv_amandine_carreno_eng%20(2).pdf?alt=media&token=0e78299f-341a-4c72-9ccc-43c53672c71a"} download="amandine_carreno_resume.pdf" target="_blank" rel="noreferrer"><button className="bio_button" >Open resume</button></a>
            </div>


            <div className="bio_content">
                Front End developer{<br />}
                Currently saying yes to new adventures ✨✨✨✨{<br />}
                Speak 🇫🇷 🇺🇸{<br />}
                Ideally Full-remote{<br />}
                Ready to relocate to Barcelona  ☀️ Paris 🥖  Marseille ⛴ {<br />}
            </div>

        </div>
    )
}

export default Bio;