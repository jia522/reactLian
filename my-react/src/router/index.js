import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import  Home from '../page/home';
import About from '../page/about';
class Content extends Component{
    render(){
        return(
            <Router>
                <div className="appContent">
                    <div className="LeftSilder">
                        <ul>
                            <li>
                                <Link to="/">菜单一</Link>
                            </li>
                            <li>
                                <Link to="/about">菜单一</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="rightContent">
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                    </div>
                </div>
            </Router>
        )
    }
}
export default Content;

