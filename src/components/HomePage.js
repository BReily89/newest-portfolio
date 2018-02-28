import React, { Component } from 'react';
import Projects from './/projects/Projects';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
h1{
    text-align: center;
    padding:20px;
}
h3{
    align-contents:center;
    padding:50px;
}
img{
    border-radius:120px;
    padding: 50px;
}
`

class HomePage extends Component {
    render() {
        return (
            <div>
            <div>
                <Wrapper>
                <h3>I'm Brandon and I'm an energetic full stack developer with over 9 yrs of hospitality experience in a range of customer-oriented service roles. I posses a strong ability to troubleshoot and problem-solve in fast-paced environment. Seasoned leader and decision maker equipped with the finesse to effectively communicate with a variety of client and personality types. Seeking to apply professional background with a Development team that values a client driven approach to hospitality work. Eager to learn and expand my skill set .</h3>

                <img class="picture" src="https://i.imgur.com/r0UHtKz.jpg?2"/>

                
                </Wrapper>
                <Projects />
            </div>
            </div>
        );
    }
}

export default HomePage;