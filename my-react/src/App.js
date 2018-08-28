import React, { Component } from 'react';
import './styles/App.less';
import Head from './componets/head';
import Content from './router/index';

class App extends Component {
    render(){
        return (
            <div className="rootCon">
                <Head/>
                <Content />
            </div>

        )
    }
    componentDidMount(){
        const headH = document.getElementsByClassName('head')[0].scrollHeight;
        const windowH = window.innerHeight||document.documentElement.clientHeight;
        const appContent = windowH - headH;
        document.getElementsByClassName('appContent')[0].style.height = appContent + 'px';


    }
}




export default App;