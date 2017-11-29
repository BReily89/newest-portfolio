import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Jeopardy = styled.div`
display: flex;
flex-direction: column;
background-size: cover;
 background-color: white;
 border: 5px double white; 
padding: 5px; 
text-align: center;

`
const List = styled.div`

`
const Self = styled.div`
display: flex;
flex-direction: column;
background-size: cover;
 background-color: white;
 border: 5px double white; 
padding: 5px; 
text-align: center;

`
const Links = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`

const Button = styled.div`
    font-size: 20px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    align-items: center;
    margin: auto;
`


class Projects extends Component {
    render() {  
        return (
         <div>
             <List>
                 
                 <Jeopardy>
                <h2>Jeopardy</h2>
                <p>In this application I created a riff on the T.V. show Jeopardy. I was able to utilize HTML, CSS, JavaScript and JQUERY to create the score keeping logic as well as question and answering rendering. </p>
                <Links>
                <Button><a href="http://veterinarian-bridget-62337.bitballoon.com/" >Jeopardy</a></Button> 
                <Button><a href="https://github.com/BReily89/Jeopardy">GitHub</a></Button> 
                </Links>
                </Jeopardy>
                <Self>
                    <h2>Self Centered Selfie </h2>
                    <p>In this application I have created an community driven online Journal Entry system that allows you to make posts based the mood your feeling with an associated selfie.
                        The languages I used were Ruby on Rails, React, JavaScript and CSS.
                    </p>
                    <Links>
                    <Button><a href='https://self-centered-selfie.herokuapp.com/'>Heroku Link</a></Button> 
                   <Button><a href='https://github.com/BReily89/self_centered_selfie'>GitHub</a></Button> 
                    </Links>
                </Self>

             </List>
         </div>
        );
    }
}

export default Projects;