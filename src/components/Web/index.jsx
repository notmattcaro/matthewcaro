import React from 'react';
import './styles.css';
import SlantRight from '../SubComponents/SlantRight';

class Web extends React.Component {
    render() {
        return(
            <div className={'webContainer'}>
                <SlantRight/>
                <h1 className={'title'}>Web Page</h1>
            </div>
        );
    }
}

export default Web;