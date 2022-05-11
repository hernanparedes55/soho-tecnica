import React from 'react';
import '../../styles/containers/footer.scss';
import {FiFacebook, FiTwitter, FiLinkedin, FiYoutube} from 'react-icons/fi';

const Footer = () => {

  return (
      
    <footer>
        <div className='row'>
            <div className='col-12 col-sm-4 text-light'>
                <h6>© 2017 SOHO internet + humana</h6>
            </div>
                           
            <div className='col-12 col-sm-4'>
                <div className='d-flex justify-content-between text-success'>
                        <h6>Visítanos</h6>
                        <h6>Escríbenos</h6>
                        <h6>Llámanos</h6>
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