import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`


    
p {
    width: 55%;
    height: 50%;
    color: rgb(230, 230, 250);
    font-family: 'Capriola', sans-serif;
    margin: 0 auto;
    background-color: rgba(176, 196, 222, .5);
    text-shadow: 2px 2px 4px #000000;

}

h2,h3 {
    text-align: center;
    color:#6d4c41;

}

img {
    border-radius: 50%;
    width: 30%;
    height: 30%;
    margin-top: 5px;
}
`

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="pic">
                        <div>
                            <img
                                src="https://i.imgur.com/j7KamB3.png"
                                alt="Mandy smiling" />
                        </div>

                        <p>
                            Hi there, I'm Mandy, I became interested in development with my career as an IT recruiter. As my many discussions with candidates over the years progressed and became increasingly techincal, I just started learning more about SDLC and the bones of technical environments and I got increasingly curious. The timing was right and I took a leap of faith and enrolled in General Assembly's immersive web development program. As you can see I'm just getting my feet wet in the industry and I'm really enjoying React and a MERN stack.
                        <br />
                        </p>

                        <p>
                            <br />
                            When I'm not on my computer, you can find me at OrangeTheory or working on my 60 year old house. I'm in love with where I live and how close I am to Buford Highway and so many beautiful trails. I enjoy taking my dogs hiking and kayaking. I also enjoy having a trip to look forward to and the steps to plan it.</p>
                    </div>

                </Container>
                )
              }
            }
      </div>
        )
    }
}
