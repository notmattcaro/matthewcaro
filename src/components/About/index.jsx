import React from 'react';
import './styles.css';
import SlantLeftSmoke from '../SubComponents/SlantLeftSmoke';

class About extends React.Component {
    render() {
        return(
            <div className={'aboutContainer'}>
                <SlantLeftSmoke></SlantLeftSmoke>
                <h1 className={'title'}>About Page</h1>
            </div>
        );
    }
}

export default About;