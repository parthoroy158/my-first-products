
import React from 'react';
import logo from '../../../public/ChatGPT Image Jul 24, 2025, 11_10_12 AM.png'
import Image from 'next/image';
import Link from 'next/link';


const FooterForAll = () => {
    return (
        <div className='w-full bg-base-200 '>
            <footer className="footer max-w-7xl mx-auto sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                    <Image className='w-20' src={logo} />
                    <Link href="https://www.kinnun.com/">
                        <p>
                            kinnun.com
                            <br />
                            Providing reliable products since @2025
                        </p>
                    </Link>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link href='/aboutUs'>
                        <p className="link link-hover" > About us</p>
                    </Link>
                    <Link href='/contactUs'>
                        <p className="link link-hover" > Contact us</p>
                    </Link>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default FooterForAll;