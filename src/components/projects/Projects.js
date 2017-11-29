import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';



const Project = styled.div`
display: flex;
flex-direction: column;
background-size: cover;
 background-color: white;
 border: 5px double white; 
padding: 5px; 
text-align: center;

`
const List = styled.div`

// `
// const Self = styled.div`
// display: flex;
// flex-direction: column;
// background-size: cover;
//  background-color: white;
//  border: 5px double white; 
// padding: 5px; 
// text-align: center;

// `
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
                 
                 <Project>
                <h2>Jeopardy</h2>
                <p>In this application I created a riff on the T.V. show Jeopardy. I was able to utilize HTML, CSS, JavaScript and JQUERY to create the score keeping logic as well as question and answering rendering. </p>
                <Links>
                <Button><a href="http://veterinarian-bridget-62337.bitballoon.com/" >Jeopardy</a></Button> 
                <Button><a href="https://github.com/BReily89/Jeopardy">GitHub</a></Button> 
                </Links>
                </Project>
                <Project>
                    <h2>Self Centered Selfie </h2>
                    <p>In this application I have created an community driven online Journal Entry system that allows you to make posts based the mood your feeling with an associated selfie.
                        The languages I used were Ruby on Rails, React, JavaScript and CSS.
                    </p>
                    <Links>
                    <Button><a href='https://self-centered-selfie.herokuapp.com/'>Heroku Link</a></Button> 
                   <Button><a href='https://github.com/BReily89/self_centered_selfie'>GitHub</a></Button> 
                    </Links>
                </Project>
                <Project>
                    <h2>VagaBond Project</h2>
                    <p>A Group project where we build a version of Trip Advisor with React on Rails</p>
                    <Links>
                    <Button><a href='https://wander-wisely.herokuapp.com/'>Heroku Link</a></Button>
                    <Button><a href='https://github.com/ern19/project_vagabond'>GitHub</a></Button>
                    </Links>
                </Project>

             </List>
             <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
         </div>
        );
    }
}

export default Projects;