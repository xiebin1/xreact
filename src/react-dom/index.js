import {conversionNode} from './vdom';
function render(vnode, container) {
    // container.innerHTML = `<pre>${JSON.stringify(vnode, null ,2)}</pre>`
    const node = conversionNode(vnode);
    container.appendChild(node);
}

export default {render}