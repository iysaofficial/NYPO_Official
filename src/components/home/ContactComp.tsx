"use client";
import React, { useEffect } from "react";
import Link from "next/link"

const ContactComp = () =>{
    useEffect(() => {
        const scriptURL =
        "https://script.google.com/macros/s/AKfycbzdgUOy_s6zjJQTgqXQ7GX3H1_w6TvWq1hsBZgH0mSREWt3qXCKA34-qo74-jfDVbHE/exec";

        const form = document.forms.namedItem("home-contact");

        if (form) {
        const handleSubmit = async (e: Event) => {
            e.preventDefault();
            try {
            await fetch(scriptURL, {
                method: "POST",
                body: new FormData(form),
            });
            alert("Pesan berhasil dikirim!");
            form.reset();
            } catch (error) {
            console.error("Error:", error);
            alert("Gagal mengirim Pesan.");
            }
        };

        form.addEventListener("submit", handleSubmit);

        // cleanup listener
        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
        }
    }, []);
    return(
        <>
        <section id="contact-section-wrapper">
            <div className="contact-box-wrapper">
                <div className="contact-info-wrap">
                    <h2 className="contact-info-title">Informasi Kontak</h2>
                    <h3 className="contact-info-sub-title">Jangan ragu untuk menghubungi kami. Kami di sini untuk membantu semua kebutuhan Anda.</h3>
                    <ul className="contact-info-details">
                        <li>
                            <i className="fa-solid fa-location-dot"></i>
                            <span></span><Link href="https://goo.gl/maps/9x18coXGCmSscKec6" target="_blank">Jl. Kemang No. 63 RT 03 RW 06</Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope"></i>
                            <span></span><Link href="mailto:iysa.olympiad@gmail.com" target="_blank">iysa.olympiad@gmail.com</Link>
                        </li>
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <span></span><Link href="https://wa.me/+6283870026877" target="_blank">+6283870026877</Link>
                        </li>
                    </ul>
                    <ul className="contact-social-icons">
                        <li><Link href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook"></i></Link></li>
                        <li><Link href="https://www.instagram.com/nypo.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i className="fab fa-instagram"></i></Link></li>
                        <li><Link href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className="fab fa-youtube"></i></Link></li>
                        <li><Link href="https://www.tiktok.com/@iysa.official" target='_blank'><i className="fab fa-tiktok"></i></Link></li>
                        <li><Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className="fab fa-linkedin"></i></Link></li>
                    </ul>
                </div>
                <div className="contact-form-wrap">
                    <form action="" method="POST" name="home-contact">
                        <h2 className="contact-form-title">Kirim Pesan</h2>
                        <input type="hidden" name="Event" value="NYPO" readOnly />
                        <div className="contact-form-fields">
                            <div className="contact-form-group">
                                <input type="text" name="Name" className="fname" placeholder="Masukan nama anda"/>
                            </div>
                          
                            <div className="contact-form-group">
                                <input type="email" name="Email" className="email" placeholder="Masukan email anda"/>
                            </div>

                            <div className="contact-form-group">
                                <textarea name="Message" id="" placeholder="Masukan pesan"></textarea>
                            </div>
                            <input type="submit" value={"Kirim"} className="contact-submit-button"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default ContactComp