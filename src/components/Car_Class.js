import React from 'react';

class CarClass extends React.Component{
    constructor(){
        super();
        this.state = {
            name : 'Ezhil'
        }
    }
    render(){
        const change = this.state.name ==="Rajesh"
        return (<>
            <h1>Hi hello my name is {this.state.name}</h1>
            <button onClick={()=>{change?this.setState({name:"Ezhil"}):this.setState({name:"Rajesh  "})}}>change Name</button>
            </>);
        
    };
}

export default CarClass;


