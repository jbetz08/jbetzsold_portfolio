import React, { Component } from 'react';
import { render } from 'react-dom';
import './Footer.css';

class Footer extends Component {
        state = { currentDate: Date };

        constructor() {
            super();
            var today = new Date(), date = (today.getMonth() + 1) + ' • ' + today.getDate() + ' • ' + today.getFullYear();

            this.state = {
                currentDate: date
            };
        }


        render() {
            return (
                <div className="footer">
                    <div className="social">
                        <a href="https://www.linkedin.com/in/josh-betzsold-4ba91a1b5/"><i class="bi bi-linkedin"></i></a>
                        <a href="https://www.instagram.com/jbetz08/"><i class="bi bi-instagram"></i></a>
                        <a href="https://github.com/jbetz08"><i class="bi bi-github"></i></a>
                        <a href="https://www.facebook.com/josh.betzsold/"><i class="bi bi-facebook"></i></a>
                    </div>
                    <div className="copyright">
                        <p>
                            &copy;
                            <span id="month"> {this.state.currentDate} </span>
                            | Josh Betzsold Portfolio
                        </p>
                    </div>
                </div>
            );
        }
}

export default Footer;