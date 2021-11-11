import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import('./Footer.css')

const Footer = () => {
    const element1 = <FontAwesomeIcon icon={faPhoneAlt} />
    const element2 = <FontAwesomeIcon icon={faMapMarkedAlt} />

    return (
        <div class="footer">
            <div >
                <h6>{element2} Marquise Pambal,N34,3DTO </h6>
                <h6>{element1} Phone : 92044888</h6>
                <p>©2021 by Smile World Dental</p>
            </div>
            <div>
                <h6>Follow Us</h6>
                <h6><i class="fab fa-facebook-square"> </i> Facebook </h6>
                <h6><i class="fab fa-twitter-square"></i> Twitter</h6>
                <h6><i class="fab fa-instagram-square"></i> Instagram</h6>
            </div>

        </div>

    );
};

export default Footer;