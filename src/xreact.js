import { createVNode } from './xvdom';

function createElement(type, props, ...children) {
    // console.log(arguments)
    props.children = children;
    delete props.__source;
    delete props.__self;

    // type:标签类型， 如div
    // vtype：组件类型
    let vtype;
    if (typeof type === "string") {
        //原生标签
        vtype = 1
    }
    else if (typeof type === 'function') {
        if (type.isClassComponent) {
            //class组件
            vtype = 2;
        }
        else {
            //函数组件
            vtype = 3;
        }
    }
    return createVNode(vtype, type, props)
}

export default {
    createElement
}


export class Component {
    //区分某个组件是class 还是 function
    static isClassComponent = true;

    constructor(props) {
        this.props = props;
        this.state = {};
    }
    setState() {

    }
}