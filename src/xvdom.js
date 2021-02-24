//vdom ---- dom
//diff
//vtype-- 元素类型： 1-html元素 2-function组件 3-class组件
export function createVNode(vtype, type, props) {
    const vnode = { vtype, type, props }
    return vnode
}

// vdom转换为dom
export function initVNode(vnode) {
    const {vtype} = vnode;
    if(!vtype) {
        //如果vtype没有就是文本节点 
        return document.createTextNode(vnode)
    }
    
    if(vtype === 1) { 
        return createElement(vnode)
    }
    else if(vtype === 2) {
        return createClassComp(vnode)
    }
    else if(vtype === 3) {
        return createFunComp(vnode)
    }
}

function createElement(vnode) {
    //根据type来创建元素
    const { type, props} = vnode;
    const node = document.createElement(type);
    
    //处理属性
    const { key, children, ...rest } = props;
    Object.keys(rest).forEach( k => {
        // 处理特别属性名: calssName, htmlFor
        if(k === 'className') {
            node.setAttribute('class', rest[k])
        }
        else if(k === 'htmlFor') {
            node.setAttribute('for', rest[k]);
        }
        else if(k === 'style' && typeof rest[k] === 'object') {
            //只是简单的对单样式（color）做了处理
            const style = Object.keys(rest[k]).map( s => s + ':' + rest[k][s]).join(';')
            node.setAttribute('style', style);
        }
        else if(k.startsWith("on")) {
            //onClick
            const event = k.toLocaleLowerCase();
            node[event] = rest[k];
        }
        else {
            node.setAttribute(k, rest[k])
        }
    }) 

    //递归子元素
    children.forEach( c => {
        if(Array.isArray(c)) {
            c.forEach( n => node.appendChild(initVNode(n)))
        } else {
            node.appendChild(initVNode(c));
        }
    })

    return node;
}

//class组件转换
function createClassComp(vnode) {
    //type就是class组件的声明
    const { type, props } = vnode;
    const component = new type(props);
    // 获取class组件的虚拟dom
    const vdom = component.render()

    return initVNode(vdom)
}
function createFunComp(vnode) {
    // type 是一个函数
    const { type, props } = vnode;
    //获取函数组件的虚拟dom
    const vdom = type(props);

    return initVNode(vdom)
}