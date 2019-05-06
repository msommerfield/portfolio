import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    color: rgb(230, 230, 250);
    margin-top: 90px;
    font-size: 40px;
    text-shadow: 2px 2px 4px #000000;
    
    h1{
        font-family: 'Berkshire Swash', cursive;
    }
    
    p{
        font-family: 'Capriola', sans-serif;
        font-size: 25px;
    }
    `

class Home extends Component {
    render() {
        return (
            <Wrapper>
                <h1>Mandy Sommerfield</h1>
                <p>Full Stack Software Engineer</p>
            </Wrapper>
        );
    }
}

export default Home;




// font-family: 'Bitter', serif;
// font-family: 'Abril Fatface', cursive;
// font-family: 'Patua One', cursive;
// font-family: 'Special Elite', cursive;
// font-family: 'Volkhov', serif;
// font-family: 'Cabin Condensed', sans-serif;
// font-family: 'Prata', serif;
// font-family: 'Cinzel Decorative', cursive;
// font-family: 'Berkshire Swash', cursive;
// font-family: 'Yeseva One', cursive;
// font-family: 'Capriola', sans-serif;
// font-family: 'Merienda One', cursive;


