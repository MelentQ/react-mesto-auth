import React from 'react';

function Footer(props) {
  const date = new Date();
  return(
    <footer className="footer section">
      <p className="footer__copyright">&copy; {date.getFullYear()} Mesto Russia</p>
    </footer>
  )
}

export  default  Footer;
