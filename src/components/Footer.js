import React from 'react';
import '../footer.css';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
                <a href="https://github.com/Connorw2222" target="_blank"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
                <a href="https://www.linkedin.com/in/connor-werth-266777206?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZQPD1sf5T7uVBvHlV3RZnQ%3D%3D" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
               
            </div>
        </div>
    )
}

export default Footer;