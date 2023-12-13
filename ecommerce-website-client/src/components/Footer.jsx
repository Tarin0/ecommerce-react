import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <div>
                <footer className="footer p-10 bg-base-300 dark:bg-black dark:text-white text-base-content">
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Online Payment</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Shops</a>
                        <a className="link link-hover">Blogs</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Social</header>
                        <div className="grid grid-flow-col gap-4">
                            <a href="#facebook" className='text-4xl'>
                                <FaFacebook />
                            </a>
                            <a href="#facebook" className='text-4xl'>
                                <FaTwitter />
                            </a>
                            <a href="#facebook" className='text-4xl'>
                                <FaInstagram />
                            </a>
                        </div>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;