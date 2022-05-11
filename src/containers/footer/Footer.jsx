import React from 'react';
import '../../styles/custom.scss';
import {FiFacebook, FiTwitter, FiLinkedin, FiYoutube} from 'react-icons/fi';

const Footer = () => {

  return (
      
    <footer>
        <div className='row'>
            <div className='col-12 col-sm-4 text-light'>
                <h6>© 2017 SOHO internet + humana</h6>
            </div>
                           
            <div className='col-12 col-sm-4'>
                <div className='d-flex justify-content-between'>
                        <h6 className="text-color-primary">Visítanos</h6>
                        <h6 className="text-color-primary">Escríbenos</h6>
                        <h6 className="text-color-primary">Llámanos</h6>
                </div>
            </div>
            <div className='col-12 col-sm-4'>
                <div className='d-flex justify-content-evenly'>
                <FiFacebook/>
                <FiTwitter/>
                <FiLinkedin/>
                <FiYoutube/>
                </div>
            </div>

        </div>
    </footer>


  )
}

export default Footer;