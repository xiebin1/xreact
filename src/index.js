import React, { Component } from './xreact';
import ReactDOM from './xreact-dom';
import * as serviceWorker from './serviceWorker';


const user = [
    {
        name: 'tom',
        age: 20
    },
    {
        name: 'jerry',
        age: 21
    }
]

function Comp(props) {
    return <h2>hi {props.name}</h2>
}

class Comp2 extends Component {
    render() {
        return (
            <div>
                <h2>hi {this.props.name}</h2>
            </div>
        );
    }
}

let jsx = (
    <div id="demo" onClick={() => alert('click')} style={{ color: 'red' }}>
        <span>Hi</span>
        <Comp name="函数组件" />
        <Comp2 name="类组件" />
        <ul>
            {
                user.map((u, index) => {
                   return <li key={index}>{u.name}{u.age}</li>
                })
            }
        </ul>
    </div>
)



ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
