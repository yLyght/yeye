import { FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa'
import './Footer.css'
import React from 'react'

function Footer(){
    return (
        <footer className="footer">
            <ul className="social_list">
                <li><FaTwitter onClick={() => window.open('https://twitter.com/uMirror_')} /></li>
                <li><FaInstagram onClick={() => window.open('')} /></li>
                <li><FaTelegram onClick={() => window.open('https://t.me/uMirrorinovations')}/></li>
            </ul>
            <p className="copy_right"><span>uMirror</span> &copy; 2022</p>
        </footer>
    )
}

export default Footer