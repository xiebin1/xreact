import {initVnode} from './react-vdom';
function render(vnode, container) {
    // container.innerHTML = `<pre>${JSON.stringify(vnode, null, 2)}</pre>`
    const nodeDom = initVnode(vnode);
    container.appendChild(nodeDom); 
}
export default {render}