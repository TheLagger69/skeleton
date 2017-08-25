import React from 'react'
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import Home from './home/index';
import UsersHome from './users/index';

class App extends React.PureComponent{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/users' component={UsersHome}/>
                </Switch>
            </BrowserRouter>

        )
    }

}
export default App;