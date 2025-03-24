import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact,faNode, faPython,faJs ,faGithub,faSlack,faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch,faCodeCommit } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    
    "JavaScript",
    "React.js",
    "Node.js",
    'Express.js',
    'Redux',
    'Material-UI',
    'Bootstrap',
    'Django',
    'Next JS',
    "HTML5",
    "CSS3",   
    "Python",
    "SQL",
    "PostgreSQL",
    'MongoDB',
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub command line",

];

const labelsThird = [
    "Discord",
    "Slack",

];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                <FontAwesomeIcon icon={faReact} size="3x" className="icon-spacing" />
                <FontAwesomeIcon icon={faNode} size="3x" className="icon-spacing" />
                <FontAwesomeIcon icon={faJs} size="3x" className="icon-spacing" />
                <FontAwesomeIcon icon={faPython} size="3x" className="icon-spacing"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React , Node js , express js  and Django. I have a strong proficiency in the  frontend and  backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGithub} size="3x"className="icon-spacing"/>
                    <FontAwesomeIcon icon={faCodeBranch} size="3x"className="icon-spacing"/>
                    <FontAwesomeIcon icon={faCodeCommit} size="3x"className="icon-spacing"/>
                    
                    <h3>Git & Github </h3>
                    <p>I use GitHub to manage code efficiently, track changes, and collaborate seamlessly with teams. With Git and GitHub, I ensure secure version control, smooth code integration, and streamlined project management.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDiscord} size="3x"className="icon-spacing"/>
                    <FontAwesomeIcon icon={faSlack} size="3x"className="icon-spacing"/>
                    <h3>Team Managment</h3>
                    <p> Woking on a team  , we usually use team collaboration tools or workplace communication platforms to work efficiently . They facilitate real-time messaging, file sharing, and integrations with other apps to improve team productivity and remote work .</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;