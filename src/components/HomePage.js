import React, { Component } from 'react';
import Projects from './/projects/Projects';

class HomePage extends Component {
    render() {
        return (
            <div>
            <div>
                <h1>The Portfolio of Brandon Reily </h1>
                <h2><img  src="https://i.imgur.com/faDPfH1.jpg?1"/></h2>
                

                
                <Projects />
            </div>
            </div>
        );
    }
}

export default HomePage;