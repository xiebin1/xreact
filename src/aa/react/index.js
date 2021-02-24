// import {createVNode} from '../react-dom/react-vdom';
// const React = {
//     createElement
// }
// function createElement(type, props, ...children) {
//     delete props.__source;
//     delete props.__self;
//     props.children = children;
//     // type: 标签的类型，如div
//     let vtype;
//     if (typeof type === 'string') {
//         // 原生标签
//         vtype = 1;
//     } else if (typeof type === 'function') {
//         if (type.isClassComponent) {
//             // 类组件
//             vtype = 2;
//         } else {
//             // 函数组件
//             vtype = 3;
//         }
//     }
//     return createVNode(vtype, type, props)
// }

// export class Component {
//     // 区分某个组件是class还是function
//     static isClassComponent = true;

//     constructor(props) {
//         this.props = props;
//         this.state = {};
//     }
// }
// export default React;

import {createVNode} from '../react-dom/react-vdom';
const React = {
    createElement
}

function createElement(type, props, ...children) {
    props.children = children
    delete props.__source;
    delete props.__self;
    return {type, props}
}

export class Component {
    static isClassComponent = true;
    constructor(props) {
        this.props = props;
        this.state = {};
    }
}


export default React;




