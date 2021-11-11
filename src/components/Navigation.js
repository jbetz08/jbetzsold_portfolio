import React from 'react';

import './Navigation.css';

function Navigation() {
    return(
        <div>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./josh_betzsold_resume.pdf" download>Resumé</a>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;