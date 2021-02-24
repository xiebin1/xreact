import { createVNode } from "../react-dom/vdom";

const React = {
    createElement
}
function createElement(type, props, ...children) {
    props.children = children;
    delete props.__source;
    delete props.__self;
    let vtype;
    if (typeof type === 'string') {
        // 原生标签
        vtype = 1;
    } else if (typeof type === 'function') {
        if (type.isClassComponent) {
            // class
            vtype = 2
        } else {
            // function
            vtype = 3;
        }
    } 
    return createVNode(vtype, type, props)
}

export class Component {
    static isClassComponent = true;
    constructor(props) {
        this.props = props;
        this.state = {};
    }
}

export default React