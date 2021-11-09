import React from 'react';
import './Summary.css';
import  {info}  from '../data/info.js';

function Summary() {
    
    return(
        <div className="summary">
            <div className="info">


                <h2>{info.name}</h2>
                <h6>{info.title}</h6>
                <p>
                    Currently a {info.year}, in the {info.major}  
                    degree with an emphasis in {info.emphasis}.
                    On pace to graduate from {info.school} in {info.graduateDate}. 
                    I love the design part of
                    software development and I also have interest in {info.interests}.

                </p>
            </div>
            <div className="profile-image">
                <img src='./profile.JPG' alt={info.name} />
            </div>
        </div>
    );
}

export default Summary;