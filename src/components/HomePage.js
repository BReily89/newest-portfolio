import React, { Component } from 'react';
import Projects from './/projects/Projects';

class HomePage extends Component {
    render() {
        return (
            <div>
            <div>
                <h1>this is the homepage</h1>
                <Projects />
            </div>
            </div>
        );
    }
}

export default HomePage;