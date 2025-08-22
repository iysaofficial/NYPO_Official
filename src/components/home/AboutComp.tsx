import Link from "next/link"

const AboutComp = () => {
    return(
        <>
        <section className="about-section" id="about-section">
        <div className="about-content">
            <img src="/assets/images/logo/NYPO.png" alt="" />
            <div className="about-text">
                <h1>NYPO</h1>
                <h5>National Youth Physics Olympiad</h5>
                <p> Olimpiade Fisika merupakan sebuah kompetisi yang diselenggarakan untuk menguji kemampuan dan pengetahuan para pelajar di bidang Fisika.</p>
                <p>Ajang ini dirancang untuk mendorong para pelajar agar lebih mendalami ilmu Fisika dan mengembangkan potensi mereka.</p>
                {/* <Link href="/AboutPage"><button className="about-btn">Read More</button></Link> */}
            </div>
        </div>
    </section>
        </>
    )
}

export default AboutComp