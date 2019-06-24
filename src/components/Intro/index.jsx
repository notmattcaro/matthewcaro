import React from 'react';
import './styles.css';

class Intro extends React.Component {

    render() {
        return (
            <div className={'introContainer'}>
                <h1 className={'title'}>Intro Page</h1>
                <div className={'slant'}></div>
            </div>
        );
    }
}

export default Intro;