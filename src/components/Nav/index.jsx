import React from 'react';
import '../../App.css';
import './styles.css';
import './hamburger.css';

class Nav extends React.Component {
    render() {
        return(
            <div className={'navContainer'}>
                <div className="position-hamburger">
                    <a className="hamburger-container">
                        <div className="hamburger-line hamburger-topbun"></div>
                        <div className="hamburger-line hamburger-patty"></div>
                        <div className="hamburger-line hamburger-bottombun"></div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Nav;