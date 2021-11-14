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
                <p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse.show" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Page Utilizes
                    </button>
                </p>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        This portfolio is utilizing React.js Framework and Vanilla Bootstrap
                    </div>
                </div>
            </div>
            <div className="profile-image">
                <img src='./profile.JPG' class="rounded mx-auto d-block" alt={info.name} />
            </div>
        </div>
    );
}

export default Summary;