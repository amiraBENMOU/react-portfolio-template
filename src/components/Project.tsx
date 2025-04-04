import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
//import mock07 from '../assets/images/mock07.png';
//import mock08 from '../assets/images/mock08.png';
//import mock09 from '../assets/images/mock09.png';
//import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1> Personal Projects</h1>
        <div className="projects-grid">
         <div className="project">
                <a href="https://youtu.be/lZj7ClqxixY" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://youtu.be/lZj7ClqxixY" target="_blank" rel="noreferrer"><h2>Khedemni Platform</h2></a>
                <p>This is a service platform.  My target is mainly the students and fresh graduates. You will find three types of works that are ; part time jobs, internships and PFE. This platform was developed using html ,css ,javascripy react.js , node.js , material UI , react bootstrap and I also used third-party APIs , redux, and hbs to create reports and multer to upload pdf’s .
                 The database is a Nosql database created with MongoDB .

                </p>
            </div>
            <div className="project">
                <a href="https://brilliant-pegasus-484ac5.netlify.app/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://brilliant-pegasus-484ac5.netlify.app/" target="_blank" rel="noreferrer"><h2>Saksouni 3la ITC</h2></a>
                <p>It is an online game of multi choice questions while the score is displayed  at the end  created with Html5 , CSS3 ,Boostrap and  Javascript  .
                </p>
            </div>
            <div className="project">
                <a href="https://merry-beijinho-2324d7.netlify.app/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://merry-beijinho-2324d7.netlify.app/" target="_blank" rel="noreferrer"><h2>Covid Test</h2></a>
                <p>It is an online Test of multi choice questions while the result  is displayed  at the end wherever you should see a doctor or not  created with Html5 , CSS3 ,Boostrap and  Javascript  . I created this test during Covid .</p>
            </div>
            <div className="project">
                <a href="https://poetic-pithivier-740b64.netlify.app/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://poetic-pithivier-740b64.netlify.app/" target="_blank" rel="noreferrer"><h2>Facebook Clone </h2></a>
                <p>This is a  Cloning of the facebook logIn Page using Html5 , CSS3 ,Boostrap and Javascript .</p>
            </div>
            <div className="project">
                <a href="https://jocular-syrniki-d5cd66.netlify.app/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jocular-syrniki-d5cd66.netlify.app/" target="_blank" rel="noreferrer"><h2>Amazon Clone</h2></a>
                <p>This is a page of the amazon website that I cloned it using Html5,CSS3 when I was learning web devlopment .</p>
            </div>
           
          
        </div>
    </div>
    );
}

export default Project;