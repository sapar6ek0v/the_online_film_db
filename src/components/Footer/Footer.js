import React from 'react';
import logo from '../../image/logo-movie.svg'
import {Container} from "react-bootstrap";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className='d-flex justify-content-between mb-5 mb-ft'>
                    <div className='md-ft-col'>
                        <a href="https://www.themoviedb.org/tv/132375-um-lugar-ao-sol">
                            <img className='footer-img' src={logo} alt="logo"/>
                        </a>
                    </div>
                    <div  className='md-ft-col'>
                        <h4 className='footer-title'>Resources</h4>
                        <div><Link className='footer-link' to={'/'}>About</Link></div>
                    </div>
                    <div  className='md-ft-col'>
                        <h4 className='footer-title'>Newsletter</h4>
                        <div className='footer-link w-75 mb-4'>Subscribe to our newsletter system now
                            to get latest news from us.</div>
                        <input className='footer-input mb-4' type="text" placeholder='Enter your email...'/>
                        <div><Link className='footer-email-link' to={'/'}>subscribe now <FontAwesomeIcon icon={faAngleRight}/></Link></div>
                    </div>
                </div>
                <div className='footer-end-title'>
                    © 2022 TMDB. All Rights Reserved. Designed by Eldiiar.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;