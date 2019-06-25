import React from 'react';
import './styles.css';
import SlantLeftSmoke from '../SubComponents/SlantLeftSmoke';

class Contact extends React.Component {
    render() {
        return(
            <div className={'contactContainer'}>
                <SlantLeftSmoke/>
                <h1 className={'title'}>Contact Page</h1>
            </div>
        );
    }
}

export default Contact;