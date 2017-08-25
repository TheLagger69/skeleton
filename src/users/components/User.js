import React from 'react';

export default class User extends React.PureComponent{w
    constructor(props){
        super(props);

    }
    render(){
        return(
            <label>
                Email:{this.props.user.email}
            </label>
        );
    }
}