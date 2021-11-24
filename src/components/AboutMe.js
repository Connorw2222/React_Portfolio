import React, { useState } from "react";
import reactDom from "react-dom";
import portfilioPic from "../assets/profilePic.JPG"
import FSLogo from "../assets/download.png"

import '../Style.css'

const About = () => {
    return (
        <div>
            <h1>About Me</h1>
            <div className='container'>
                <img className='imageFsLogo' src={FSLogo} />
                <img className='imageMe' src={portfilioPic} />
            </div>
            <div className="newflex">
                <div className='card'>
                    <p>
                        I am a current student at California State University,
                        Fresno earning a Bachelor of Science in Business Administration – Finance.
                        I am also enrolled in the Berkley Coding Boot camp for
                        full stacks web development. My technical skill include:
                    </p>
                    <div>
                        <ul>
                            <li>HTMl</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Web and Third-party APIs</li>
                            <li>Sever-Side APIs</li>
                            <li>Node.js</li>
                            <li>Object Oriented Programing</li>
                            <li>Express.js</li>
                            <li>SQL</li>
                            <li>NoSQL</li>
                            <li>Progressive Web Applications</li>
                            <li>React</li>
                            <li>MERN</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About