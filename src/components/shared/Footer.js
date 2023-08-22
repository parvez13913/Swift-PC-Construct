import { useEffect, useState } from 'react';
import { FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover">About</a>
                <a className="link link-hover">Contact</a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a
                        href='https://twitter.com/parvez13913'
                        target="_blank"
                        className='link text-[#00acee]'>
                        <FaTwitter className='text-3xl' />
                    </a>
                    <a
                        href='https://www.facebook.com/parvez.rahman.13913'
                        target="_blank"
                        className='link text-[#3b5998]'>
                        <FaFacebook className='text-3xl text-' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/parvez-rahman-87714422a/'
                        target="_blank"
                        className='link text-[#0072b1]'>
                        <FaLinkedinIn className='text-3xl text-' />
                    </a>
                </div>
            </div>
            <div>
                <p>Copyright © {currentYear} - All right reserved by Parvez Rahman</p>
            </div>
        </footer>
    );
};

export default Footer;