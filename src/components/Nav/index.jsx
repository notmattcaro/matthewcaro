import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../../App.css';
import './styles.css';
import './hamburger.css';
import './dimmer.css';



class Nav extends React.Component {
    //==== This controls Nav state ====
    constructor(props) {
        super(props);
        this.state = {
            ishamburgeractive: true,
        }

        this.hamburgercross = this.hamburgercross.bind(this);   
    }
    
    //==== This controls hamburger cross ====
    hamburgercross() {
        this.setState(updateState => ({
            ishamburgeractive: !updateState.ishamburgeractive
        }));
    }

    render() {
        //==== create variables and logic before the return statement ====
        let hamburgerContainerName = this.state.ishamburgeractive ? 'hamburger-container' : 'hamburger-container hamburger-cross';

        let theDimmer = this.state.ishamburgeractive ? 'nothing' : 'page-dimmer';

        return(
            <div className={'navContainer'}>
                <div className={"position-hamburger"}>
                    <a className={hamburgerContainerName} onClick={this.hamburgercross}>
                        <div className="hamburger-line hamburger-topbun"></div>
                        <div className="hamburger-line hamburger-patty"></div>
                        <div className="hamburger-line hamburger-bottombun"></div>
                    </a>
                </div>
                <nav id={'side-nav-container'}>
                    <div className={theDimmer}></div>
                </nav>
            </div>
        );
    }
}

export default Nav;