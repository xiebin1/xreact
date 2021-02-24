import { createVnode } from "../react-dom/react-vdom";

const React = {
    createElement
}
function createElement(type, props, ...children) {
    delete props.__source;
    delete props.__self;
    // 将children放进props
    props.children = children;
    let vtype;
    if (typeof type === 'string') {
        // 原生标签
        vtype = 1;
    } else if (typeof type === 'function') {
        if (type.isClassComponent) {
            // class
            vtype = 2;
        } else {
            // function
            vtype = 3;
        }
    }
    return createVnode(vtype, type, props)
}
export default React;

export class Component {
    static isClassComponent = true;
    constructor(props) {
        this.props = props;
        this.state = {};
    }
}