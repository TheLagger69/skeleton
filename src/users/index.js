import React from 'react'
import {connect} from 'react-redux'
import User from './components/User'
import axios from 'axios'
import mapDispatchToProps from './redux/map-dispatch'
import mapStateToProps from './redux/map-state'


class UsersHome extends React.PureComponent {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(){
        axios.get('/rest/users/' )
            .then((res) => {
            this.props.setUser(res.data);
            console.log(res.data);
        })
            .catch((err) => console.log(err));


    }

    render(){
        let userList  = [];
        for(let user in this.props.users){
            userList.push(user);
        }
        return (<div>
                {userList}
            <button onclick={this.handleSubmit()}>Dame gas maudo</button>
            </div>);

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UsersHome);