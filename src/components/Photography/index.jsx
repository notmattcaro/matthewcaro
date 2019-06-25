import React from 'react';
import './styles.css';
import SlantRight from '../SubComponents/SlantRight';

class Photography extends React.Component {
    render() {
        return(
            <div className={'photographyContainer'}>
                <SlantRight/>
                <h1 className={'title'}>Photography Page</h1>
            </div>
        );
    }
}

export default Photography;