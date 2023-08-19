import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Header.css'
function Header() {

  return (
    <header className="header">
      <h1>Midhun M S</h1>
      <p>Full Stack Developer</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/" target="_blank">
          <LinkedInIcon className='icon'/>
        </a>
        <a href="https://github.com/" target="_blank">
          <GitHubIcon className='icon'/>
        </a>
        <a href="mailto:midhunreal1@gmail.com">
          <EmailIcon className='icon'/>
        </a>
      </div>
    </header>
  );
}

export default Header;
