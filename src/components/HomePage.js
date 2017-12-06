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
}
`

class HomePage extends Component {
    render() {
        return (
            <div>
            <div>
                <Wrapper>
                <h1>The Portfolio of Brandon Reily </h1>
                <h2><img  src="https://i.imgur.com/faDPfH1.jpg?1"/></h2>
                <h3>My Name is Brandon  and I am an energetic full stack developer with over 9 yrs of hospitality experience in a range of customer-oriented service roles. Strong ability to troubleshoot and problem-solve in fast-paced environment. Seasoned leader and decision maker equipped with the finesse to effectively communicate with a variety of client and personality types. Seeking to apply professional background with a Development team that values a client driven approach to hospitality work. Eager to learn and expand my skill set .</h3>

                
                </Wrapper>
                <Projects />
            </div>
            </div>
        );
    }
}

export default HomePage;