'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../assets/css/Navbar.css'


const NavbarComp = () =>{
    useEffect(() => {
        // Pastikan kode berjalan di client side
        if (typeof window === 'undefined') return;

        // Handler functions untuk dropdown menus
        const handleSubMenuClick = (e: Event) => {
            e.preventDefault();
            const btn = e.currentTarget as HTMLElement;
            const subMenu = btn.nextElementSibling as HTMLElement;
            if (subMenu && subMenu.classList.contains("sub-menu")) {
                if (subMenu.style.display === "none" || subMenu.style.display === "") {
                    subMenu.style.display = "block";
                } else {
                    subMenu.style.display = "none";
                }
            }
        };

        const handleMoreMenuClick = (e: Event) => {
            e.preventDefault();
            const btn = e.currentTarget as HTMLElement;
            const moreMenu = btn.nextElementSibling as HTMLElement;
            if (moreMenu && moreMenu.classList.contains("more-menu")) {
                if (moreMenu.style.display === "none" || moreMenu.style.display === "") {
                    moreMenu.style.display = "block";
                } else {
                    moreMenu.style.display = "none";
                }
            }
        };

        // Handler functions untuk responsive menu
        const handleMenuOpen = () => {
            const menu = document.querySelector(".menu");
            menu?.classList.add("active");
        };

        const handleMenuClose = () => {
            const menu = document.querySelector(".menu");
            menu?.classList.remove("active");
        };

        // Add event listeners
        const subBtns = document.querySelectorAll(".sub-btn");
        const moreBtns = document.querySelectorAll(".more-btn");
        const menuBtn = document.querySelector(".menu-btn");
        const closeBtn = document.querySelector(".close-btn");

        subBtns.forEach((btn) => {
            btn.addEventListener("click", handleSubMenuClick);
        });

        moreBtns.forEach((btn) => {
            btn.addEventListener("click", handleMoreMenuClick);
        });

        menuBtn?.addEventListener("click", handleMenuOpen);
        closeBtn?.addEventListener("click", handleMenuClose);

        // Cleanup function
        return () => {
            subBtns.forEach((btn) => {
                btn.removeEventListener("click", handleSubMenuClick);
            });
            moreBtns.forEach((btn) => {
                btn.removeEventListener("click", handleMoreMenuClick);
            });
            menuBtn?.removeEventListener("click", handleMenuOpen);
            closeBtn?.removeEventListener("click", handleMenuClose);
        };
    }, []);
    
    return(
        <>
        <header>
            <Link href="/">
                <Image 
                    className='logo-nav' 
                    src="/assets/images/logo/NYPO.png" 
                    alt="NYPO Logo" 
                    width={100} 
                    height={50}
                    priority
                />
            </Link>
            <div className='navigation'>
                <ul className='menu'>
                    <div className='close-btn'>

                    </div>
                    <li className='menu-item'>
                        <Link href="/">Utama</Link>
                    </li>
                    <li className='menu-item'>
                        <Link href="/#about-section">Tentang</Link>
                    </li>
                    {/* <li className='menu-item'><a href="/#category-main-section">Category</a></li> */}
                    {/* <li className='menu-item'><a href="#">FAQ</a></li> */}
                    {/* <li className='menu-item'><a href="#main-category-section">Kategori</a></li> */}
                    <li className='menu-item'>
                        <Link href="https://drive.google.com/file/d/1mhDPGMbCQiP9LkcrblvTNgDll1yEf47w/view?usp=sharing" 
                            target='_blank'
                            rel="noopener noreferrer">
                                Buku Panduan
                        </Link>
                    </li>
                    {/* <li className='menu-item'><a href="#contact-section-wrapper">Kontak</a></li> */}
                    {/* <li className='menu-item'><a href="https://drive.google.com/drive/folders/1l_bCazIZmdtOSUjAuBAgXTg7YEBTixPY" target='_blank'>Certificate Supervisor</a></li> */}
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Liputan Media <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1xtNRUdpRV1YpfkqCYINwnbG83y-La-bU/view?usp=sharing" target='_blank'>Press Release 2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1Kf-TDvAVoVyKQCjkXfioeJAMS4bZZYAA/view?usp=sharing" target='_blank'>Press Release 2024</a></li>
                        </ul>
                    </li>  */}
                    <li className='menu-item'>
                        <Link href="/after-event">Daftar Pemenang </Link>
                        {/* <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1kt2kog3aRUKw07KYcm90ukh1ANOuO2Zt/view?usp=sharing" target='_blank'>Daftar Pemenang 2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1AS-LH4HLaqT33iyC6c3ibZKd-lsP3U8x/view?usp=drive_link" target='_blank'>Daftar Pemenang 2024</a></li>
                        </ul> */}
                    </li> 
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Kurasi <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1GX6vTuVSFexUabNK4Gx0J86kSBhNeNJ3?usp=sharing" target='_blank'>Kurasi 2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1zWjmXL40yto118u2ydFRTJPEMv4W3jRG?usp=sharing" target='_blank'>Kurasi 2024</a></li>
                        </ul>
                    </li>  */}
                    
                    <li className='menu-item'>
                        <Link className='sub-btn' href="#">
                            Sertifikat Supervisor <i className='fas fa-angle-down'></i>
                        </Link>
                        <ul className='sub-menu'>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/u/0/folders/11THF_yzE76YPSwqzUib5AcRuMZszqaA4" 
                                    target='_blank' 
                                    rel="noopener noreferrer">
                                        Sertifikat Supervisor 2026
                                </Link>
                            </li>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1HYevQOGrxqVCRxbtw0Hp8r1WlFSJbq4E?usp=sharing" 
                                    target='_blank' 
                                    rel="noopener noreferrer">
                                        Sertifikat Supervisor 2025
                                </Link>
                            </li>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1bYotKQV-jsxLIbsrlsFMpXsKh5EZc0y2?usp=sharing" 
                                    target='_blank' 
                                    rel="noopener noreferrer">
                                        Sertifikat Supervisor 2024
                                </Link>
                            </li>
                        </ul>
                    </li> 
                    <li className='menu-item'>
                        <Link className='sub-btn' href="#">
                            Galeri <i className='fas fa-angle-down'></i>
                        </Link>
                        <ul className='sub-menu'>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1hsKM37nUe-qzpmng7EAyKV_EVYdvBAsI?usp=sharing" 
                                    target='_blank' 
                                    rel="noopener noreferrer">
                                        2026
                                </Link>
                            </li>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1UuGC30v3b9rhjYON-dP_1nz1NYdBrQhI?usp=sharing" 
                                    target='_blank' 
                                    rel="noopener noreferrer">
                                        2025
                                </Link>
                            </li>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1iazwpyafH3P0Zx4j0CXwuQ2J6mfADvql?usp=sharing" 
                                    target='_blank' 
                                    rel="noopener noreferrer">
                                        2024
                                </Link>
                            </li>
                        </ul>
                    </li> 
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">With Sub-dropdown <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="#">Sub Item 01</a></li>
                            <li className='sub-item'><a href="#">Sub Item 02</a></li>
                            <li className='sub-item'><a href="#">Sub Item 03</a></li>
                            <li className='sub-item'><a href="#">Sub Item 04</a></li>
                            <li className='sub-item more'>
                                <a className='more-btn' href="#">More Items <i className='fas fa-angle-right'></i></a>
                                <ul className='more-menu'>
                                    <li className='more-item'><a href="#">More Item 01</a></li>
                                    <li className='more-item'><a href="#">More Item 02</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}
                </ul>
            </div>
            <div className='menu-btn'>

            </div>
        </header>
        </>
    )
}

export default NavbarComp