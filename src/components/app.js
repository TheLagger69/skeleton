import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './home/home';

class App extends React.PureComponent{
    render(){
        return (
            <BrowserRouter>
                <Route exact path='/' component={Home}/>
            </BrowserRouter>

        )
    }

}
export default connect()(App)