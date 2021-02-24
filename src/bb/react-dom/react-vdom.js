export function createVnode(vtype, type, props) {
    return {vtype, type, props}
}

export function initVnode(vnode) {
    const {vtype} = vnode;
    if (!vtype) {
        return document.createTextNode(vnode);
    } else if (vtype === 1) {

        return createElementTag(vnode)

    } else if (vtype === 2) {

        return createClassComp(vnode)

    } else if (vtype === 3) {
        
        return createFuncComp(vnode)

    } 
}

function createElementTag(vnode) {
    const {type, props} = vnode;
    const node = document.createElement(type);
    
    const {key, children, ...rest} = props;
    
    Object.keys(rest).forEach(i => {
        if (i === 'className') {
            node.setAttribute('class', rest[i]);
        } else if (i === 'style' && typeof rest[i] === 'object') {
            console.log(rest[i])
            // node.style.cssText = rest[i]
            const style = Object.keys(rest[i]).map(s => s + ':' + rest[i][s]).join(';')
            node.setAttribute('style', style);
        } else if (/on\w+/.test(i)) {
            const event = i.toLowerCase()
            node[event] = rest[i]
        } else {
            node.setAttribute(i, rest[i]);
        }
    })
    children.forEach( dom => {
        if (Array.isArray(dom)) {
            dom.forEach(n => node.appendChild(initVnode(n)))
        } else {
            node.appendChild(initVnode(dom));
        }
    })
    return node
}

function createClassComp(vnode) {
    const {type, props} = vnode;
    const vdom = new type(props).render();
    return initVnode(vdom);
}

function createFuncComp(vnode) {
    const {type, props} = vnode;
    const vdom = type(props);
    return initVnode(vdom);
}