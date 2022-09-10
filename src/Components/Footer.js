import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <footer className='main-footer bg-secondary bg-gradient text-light text-opacity-75'>
        <div className='container text-center'>
            <div className='row'>
                <div className='col-md-3 col-sm-6 side-footer'>
                    Copyright © {new Date().getFullYear()}   
                </div>
                <div className='col-md-6 col-sm-6 mid-footer'>
                    <ul className='list-unstyled'>
                        <li>Contact Us</li>
                        <li>
                        <EmailIcon sx= {{px:1, fontSize: 40}}/>
                        <InstagramIcon sx= {{px:1, fontSize: 40}}/>
                        <FacebookIcon sx= {{px:1,  fontSize: 40}}/>
                        </li>
                    </ul>
                </div>
                <div className='col-md-3 col-sm-6 link side-footer'>
                    <a href="https://www.who.int/news-room/fact-sheets/detail/dementia">
                    What is Dementia?
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;