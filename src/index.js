import React, {Component} from './react';
import ReactDom from './react-dom';


function Comp(props) {
return <h2>hi {props.name}</h2>
}



const user = [
    {
        name: 'xiebin',
        age: 12
    },
    {
        name: '123',
        age: 14
    },
    {
        name: '352',
        age: 13
    }
]
class Comp2 extends Component {
    render() {
        return (
        <h2>hi {this.props.name}</h2>
        )
    }
}
let jsx = (
    <div style={{color: 'red'}} onClick={()=>alert('click')}>
        <span>hello</span>
        <Comp name="function" />
        <Comp2 name="class" />
        <ul>
            {user.map((item,index) => {
                return (
                <li key={index}>{item.name}</li>
                )
            })}
        </ul>
    </div>
)
console.log(jsx)

ReactDom.render(jsx, document.getElementById('root'));