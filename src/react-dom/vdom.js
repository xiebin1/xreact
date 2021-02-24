export function createVNode (vtype, type, props) {
    return {vtype, type, props}
}

// vdom=》dom
export function conversionNode(vnode) {
    const {vtype} = vnode;
    if (!vtype) {
        return document.createTextNode(vnode);
    }

    if (vtype === 1) {
        return createElementTag(vnode);
    } else if (vtype === 2) {
        return createClassComp(vnode);
    } else if (vtype === 3) {
        return createFuncComp(vnode);
    } 
}

function createElementTag(vnode) {
    const {type, props} = vnode;
    const node = document.createElement(type);

    // 处理特殊属性
    const {key, children, ...rest} = props;
    Object.keys(rest).forEach(i => {
        if (i === 'className') {        
            return node.setAttribute('class', rest[i]);
        } else if(i === 'style'&& typeof rest[i] === 'object') {
            const style = Object.keys(rest[i]).map(n => n + ':' + rest[i][n]).join(';')
            return node.setAttribute('style', style);
        } else if(/on\w+/.test(i)) {
            const event = i.toLowerCase();
            return node[event] = rest[i];
        } else {
            return node.setAttribute(i, rest[i]);
        }
    })

    children.forEach(dom => {
        if (Array.isArray(dom)) {
            dom.forEach(n => node.appendChild(conversionNode(n)))
        } else {
            const vnode = conversionNode(dom)
            node.appendChild(vnode);
        }
    })
    return node
}
function createClassComp(vnode) {
    const {type, props} = vnode;
    const dom = new type(props).render();
    return conversionNode(dom)
}
function createFuncComp(vnode) {
    const {type, props} = vnode;
    const dom = type(props);
    return conversionNode(dom)
}