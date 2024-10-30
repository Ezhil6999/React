import React from 'react';

class CarClass extends React.Component{
    constructor(){
        super();
        this.state = {
            name : 'Ezhil',
            age:22,
            role:"Waste Engineer"
        }
    }
    render(){
        // const change = this.state.name ==="Rajesh"
        return (<>
            <h1>Hi my name is {this.state.name} and i am {this.state.age} years old. I am a {this.state.role}</h1>
            {/* <button onClick={()=>{change?this.setState({name:"Ezhil"}):this.setState({name:"Rajesh  "})}}>change Name</button> */}
            <input id='data' type='text' placeholder='Enter the value'/>
            <button onClick={this.setState((previousState)=>{return {...previousState,name : document.getElementById("data").value }})}>change Name</button>
            <button>change age</button>
            <button>change role</button>
            </>);
        
    };
}

export default CarClass;


