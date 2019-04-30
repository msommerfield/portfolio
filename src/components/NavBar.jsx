import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: rgba(176, 196, 222, .5);
    height: 70px;
    text-decoration: none;
    display: flex;
    justify-content: space-around;


    a {
    color: rgb(230, 230, 250);
    text-decoration: none;
    font-family: 'Capriola', sans-serif;
    font-size: 25px;
    cursor: pointer;
    text-shadow: 2px 2px 4px #000000;
    margin-top: 20px;
    }
    `

class NavBar extends Component {
    render() {
        return (
            <Wrapper>
                <a href="/">Home</a>
                <a href="/AboutMe/">About Me</a>
                <a href="/Projects/">Projects</a>
                <a href="/ContactMe/">Contact Me</a>
            </Wrapper>
        );
    }
}

export default NavBar;