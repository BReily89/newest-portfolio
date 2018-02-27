import React, { Component } from 'react';
import styled from 'styled-components';


const Project = styled.div`
align-content: center !important;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color:white;
text-align:center;
padding:20px
text-shadow: 2px 2px 0px black;
a{
    color:white;
    text-align:center;
    text-shadow: 2px 2px 0px black;    
}

`
class Projects extends Component {

    render() {
        return (
            <div>
                <div class="container">


                    <Project class="card" styles="width: 20rem;">
                        <img class="card-img-top" src="https://i.imgur.com/WxlNlsj.png?3" alt="Card image cap" />
                        <div class="card body">
                            <h4 class="card-title">Jeopardy</h4>
                            <p class="card-text">In this application I have created a riff of the T.V. show "Jeopardy".Using HTML, CSS, Javascript and JQUERY I created a functional page that includes addition and subtraction logic</p>
                            <a href="http://veterinarian-bridget-62337.bitballoon.com/" class="btn btn-primary">Bitballoon Link</a> <br /> <a href="https://github.com/BReily89/Jeopardy" class="btn btn-primary">github</a>
                        </div>
                    <Project class="card" styles="width: 20rem;">
                            <img class1="card-img-top" src="https://i.imgur.com/NfgFRI1.png?2" alt="Card image cap" />
                            <div class="card body">
                                <h4 class="card-title">'Lazy Lifter'</h4>
                                <p class="card-text">With React, I created an online library of exercise routines associated with users</p>
                                <a href="https://lazy-lifter.herokuapp.com/" class="btn btn-primary">Heroku Link</a><br /> <a href="https://github.com/BReily89/project-3" class="btn btn-primary">Github</a>


                            </div>
                            <div class="card" styles="width: 20rem;" />
                            <img class1="card-img-top" src="https://i.imgur.com/lhMAwQu.png?3" alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">'Self Centered Selfie'</h4>
                                <p class="card-text">React on Rails I created an online journal with full CRUD that allows users to add moods and a selfie associated with each post</p>
                                <a href="https://self-centered-selfie.herokuapp.com/" class="btn btn-primary">Heroku Link</a> <br /><a href="https://github.com/BReily89/self_centered_selfie" class="btn btn-primary">github</a>


                            </div>
                            <div class="card" styles="width: 20rem;" />
                            <img class1="card-img-top" src="https://i.imgur.com/t1IboHC.jpg?2" alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">Vagabond project</h4>
                                <p class="card-text">Using React on Rails we teamed up in groups for some paired/mob programming to complete 'sprints' to build our own version of trip advisor</p>
                                <a href="https://wander-wisely.herokuapp.com/" class="btn btn-primary">Heroku Link</a><br /> <a href="https://github.com/ern19/project_vagabond" class="btn btn-primary">Github</a>
                            </div></Project></Project>
                </div> </div>






        )
    }

}


export default Projects;