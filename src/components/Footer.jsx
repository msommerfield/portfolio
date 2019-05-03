import React, { Component } from 'react';
import styled from 'styled-components';
// import StickyFooter from 'react-sticky-footer';



const Wrapper = styled.div`
    background-color: rgba(176, 196, 222, .5);
    text-decoration: none;
    display: flex;
    flex-shrink: 0;
    padding-bottom:10px;
    position:absolute;
    left:0;
    bottom:0;
    right:0;
    /* justify-content: space-around; */


    a {
    color: rgb(230, 230, 250);
    text-decoration: none;
    font-family: 'Capriola', sans-serif;
    font-size: 25px;
    cursor: pointer;
    text-shadow: 2px 2px 4px #000000;
    } 
    `

class Footer extends Component {
    render() {
        return (
            <Wrapper> 
                <div className="social-links">

                     {/* Linkedin */}
                    <a href="https://www.linkedin.com/in/mandy-sommerfield/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                    {/* Github */}
                    <a href="https://github.com/msommerfield/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                    </a>

                     {/* Github */}
                     <a href="https://www.instagram.com/mandddyyy/" rel="noopener noreferrer" target="_blank">
                     <i className="fa fa-instagram" aria-hidden="true" />
                    </a>

                </div>    
            </Wrapper>
        );
    }
}

export default Footer;