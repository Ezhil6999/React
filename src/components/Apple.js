import React from "react";

class Apple extends React.Component{
    render(){
        const values = this.props.values
        const color =values.color
        const type = values.type
        return (
            <h2>I am a {color} {type} Apple</h2>
        )
    }
}

export default Apple;