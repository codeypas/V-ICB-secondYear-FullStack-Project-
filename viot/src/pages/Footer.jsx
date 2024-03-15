import React from 'react';
import { MdMailOutline } from "react-icons/md";

function Footer() {
  return (
    <div style={{ backgroundColor: '', color: 'black', padding: '20px',margin:'20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }} className="section socials">
      
      </div>
      <div className="section" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div className="links" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
         
          <p style={{ marginRight: '50px' }}>HOME</p>
          <p style={{ marginRight: '50px' }}>Chatroom</p>
          <p style={{ marginRight: '50px' }}>About us</p>
          <p style={{ marginRight: '50px' }}>Resource</p>
          <p style={{ marginRight: '50px' }}>Faculty</p>
        </div>
      </div>
      <div className="section">
        
      <div className="mail" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
    <MdMailOutline size={20} style={{ marginRight: '10px' }} />
    <p style={{ color: 'white' }}><a href="mailto:info@bmsce.ac.in" style={{ color: 'lightblue' }}>info@bmsce.ac.in</a></p>
</div>
      </div>
      <div className="copyright">
        <p>© 2024 Copyright: IOT</p>
      </div>
    </div>
  );
}

export default Footer;