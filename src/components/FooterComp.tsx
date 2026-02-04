import Link from 'next/link'
import '../assets/css/Footer.css'


const FooterComp = () => {
    return(
        <>
        <footer>
            <div className="footer-container">
                <div className="footer-sec aboutus">
                    <h2>NYPO</h2>
                    <p>Olimpiade Fisika merupakan sebuah kompetisi yang diselenggarakan untuk menguji kemampuan dan pengetahuan para pelajar di bidang Fisika.</p>
                    <br />
                    <div className="hero-social-icon">
                        <span>Follow us</span>
                        <Link href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></Link>
                        <Link href="https://www.instagram.com/nypo.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i className='fab fa-instagram instagram-bg'></i></Link>
                        <Link href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></Link>
                        <Link href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></Link>
                        <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></Link>
                    </div>
                </div>
                <div className="footer-sec footer-quicklinks">
                    <h2>Link Informasi</h2>
                    <ul>
                        <li><Link href="/#contact-section-wrapper">Kontak</Link></li>
                        <li><Link href="https://iysa.or.id" target='_blank'>Website Utama Kami</Link></li>
                        <li><Link href="https://www.iysaolympiad.or.id/" target='_blank'>IYSA Olympiad Website</Link></li>
                    </ul>
                </div>
                <div className="footer-sec footer-quicklinks">
                    <h2>Navigation</h2>
                    <ul>
                        <li><Link href="/">Utama</Link></li>
                        <li><Link href="/#about-section">Tentang</Link></li>
                        <li><Link href="/#main-category-section">Kategori</Link></li>
                        <li><Link href="#">Buku Panduan</Link></li>
                        <li><Link href="/#contact-section-wrapper">Kontak</Link></li>
                    </ul>
                </div>
                <div className="footer-sec footer-contact">
                    <h2>Office</h2>
                    <ul className='info'>
                        <li>
                            <span><i className='fa-solid fa-location-dot'></i></span><p><Link href="https://goo.gl/maps/9x18coXGCmSscKec6" target='_blank'>Jl. Kemang, Pasir Putih, Kecamatan. Sawangan, Kota Depok, Jawa Barat 16519</Link></p>
                        </li>
                        <li>
                            <span><i className='fa-solid fa-phone'></i></span><p><Link href="https://wa.me/+6288213248890" target='_blank'>+6288213248890</Link></p>
                        </li>
                        <li>
                            <span><i className='fa-solid fa-envelope'></i></span><p><Link href="mailto:iysa.olympiad@gmail.com" target='_blank'>iysa.olympiad@gmail.com</Link></p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className='copyrightText'>
            <p>Copyright © 2024 NYPO Official.All rights reserved</p>
        </div>
        </>
    )
}

export default FooterComp