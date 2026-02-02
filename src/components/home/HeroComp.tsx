import Link from "next/link"

const HeroComp = () => {
    return(
        <>
       
        <section className="hero-section">
            <div className="hero-container">
                <br />
                <img src="/assets/images/logo/NYPO.png" alt=""/>
                <h1>National Youth Physics Olympiad</h1>
                <p>Pendaftaran International Youth Physics Olympiad telah dibuka!<br /> dengan acara bergengsi ini dan dapatkan pengalaman yang tak terlupakan!
                </p>
                <br />
                <br />
                <button disabled className="registration-button">Registrasi Tutup</button>
                {/* <Link href="/registration" className="registration-button">Registrasi</Link> */}
                
                <div className="hero-social-icon">
                    <br />
                    <br />
                    <span>Follow us</span>
                    <Link href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></Link>
                    <Link href="https://www.instagram.com/nypo.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i className='fab fa-instagram instagram-bg'></i></Link>
                    <Link href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></Link>
                    <Link href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></Link>
                    <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default HeroComp