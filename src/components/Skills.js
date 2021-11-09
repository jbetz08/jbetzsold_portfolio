import React from 'react';
import './Skills.css';
import {skills} from '../data/skillsData.js';

function Skills() {

    return(
        <div className="skills-overview">
            <h1>Skills Summary</h1>
            <div className="skills-pillars">

                <div className="languages">
                    <h3>Languages:</h3>
                    <ul>
                        <li><i class="bi bi-check2-circle"></i> {skills.languages[0]}</li>
                        <li><i class="bi bi-check2-circle"></i> {skills.languages[1]}</li>
                        <li><i class="bi bi-check2-circle"></i> {skills.languages[2]}</li>
                        <li><i class="bi bi-check2-circle"></i> {skills.languages[3]}</li>
                        <li><i class="bi bi-check2-circle"></i> {skills.languages[4]}</li>
                        <li><i class="bi bi-check2-circle"></i> {skills.languages[5]}</li>
                        <li><i class="bi bi-check2-circle"></i> {skills.languages[6]}</li>
                        <li><i class="bi bi-check2-circle"></i> {skills.languages[7]}</li>
                    </ul>
                </div>

                <div className="frameworks">
                    <h3>Frameworks:</h3>
                    <ul>
                        <li><i class="bi bi-check2-circle"></i> {skills.frameworks[0]}</li>
                        <li><i class="bi bi-check2-circle"></i> {skills.frameworks[1]}</li>
                    </ul>
                </div>

                <div className="others">
                    <h3>Technologies:</h3>
                    <ul>
                        <li><i class="bi bi-check2-circle"></i> {skills.others[0]}</li>
                        <li><i class="bi bi-check2-circle"></i> {skills.others[1]}</li>
                        <li><i class="bi bi-check2-circle"></i> {skills.others[2]}</li>
                        <li><i class="bi bi-check2-circle"></i> {skills.others[3]}</li>
                        <li><i class="bi bi-check2-circle"></i> {skills.others[4]}</li>
                    </ul>
                </div>
                
            </div>
            
        </div>
    );
}

export default Skills;