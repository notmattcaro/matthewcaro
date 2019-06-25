import React from 'react';
import './styles.css';
import SlantLeftSmoke from '../SubComponents/SlantLeftSmoke';

class Design extends React.Component {
    render() {
        return(
            <div className={'designContainer'}>
                <SlantLeftSmoke/>
                <h1 className={'title'}>Design Page</h1>
            </div>
        );
    }
}

export default Design;