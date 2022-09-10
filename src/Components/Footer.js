import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <footer className='main-footer bg-secondary bg-gradient text-light text-opacity-75'>
        <div className='container text-center footer-wrapper'>
            <div className='row'>
                <div className='col-md-3 col-sm-6'>
                    Copyright © {new Date().getFullYear()}   
                </div>
                <div className='col-md-3 col-sm-6 link'>
                    <a href="/contact">Contact Us</a>
                </div>
                <div className='col-md-3 col-sm-6 social-media'>
                    <EmailIcon sx= {{mx:1,  fontSize: 25}}/>
                    <InstagramIcon sx= {{mx:1,  fontSize: 25}}/>
                    <FacebookIcon sx= {{mx:1,  fontSize: 25}}/> 
                </div>
                <div className='col-md-3 col-sm-6 link'>
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