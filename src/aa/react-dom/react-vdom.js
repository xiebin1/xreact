// // // diff
// // // vtype 元素的类型  1：html元素  2：function  3：class
// export function createVNode(vtype, type, props) {
//     const vnode = {vtype, type, props};
//     return vnode;
// }


// export function initVNode(vnode) {
//     const {vtype} = vnode;
//     if (!vtype) {
//         return document.createTextNode(vnode);
//     }
//     if (vtype === 1) {
//         return cretaeElement(vnode);
//     }
//     else if (vtype === 2) {
//         return cretaeclassComp(vnode);
//     }
//     else if (vtype === 3) {
//         return cretaeFuncComp(vnode);
//     }
// }

// // vdom => dom
// export function initVNode(vnode) {
//     const { vtype } = vnode;
//     if (!vtype) {
//         // 没有vtype就是文本节点
//         return document.createTextNode(vnode);
//     }
//     if (vtype === 1) {
//         // 原生
//         return createElement(vnode)
//     }
//     else if (vtype === 2) {
//         // 类组件
//         return createClassComp(vnode)
//     }
//     else if (vtype === 3) {
//         // 函数组件
//         return createFuncComp(vnode)
//     }
// }
// function createElement(vnode) {
//     // 根据type来创建元素
//     const {type, props} = vnode;
//     const node = document.createElement(type);

//     // 处理属性
//     const {key, children, ...rest} = props;
//     Object.keys(rest).forEach(i => {
//         // 处理特别属性名: className  htmlFor
//         if (i === 'className') {
//             node.setAttribute('class', rest[i]);
//         } else if (i === 'htmlFor') {
//             node.setAttribute('for', rest[i]);
//         } else if (i === 'style' && typeof rest[i] === 'object') {
//             const style = Object.keys(rest[i]).map(s => s + ':' + rest[i][s]).join(';');
//             node.setAttribute('style', style);
//         } else if (/on\w+/.test(i)) {
//             const event = i.toLowerCase();
//             node[event] = rest[i];
//         } else {
//             node.setAttribute(i, rest[i]);
//         }

//     })
//     // 递归子元素
//     children.forEach( dom => {
//         if (Array.isArray(dom)) {
//             dom.forEach(n => node.appendChild(initVNode(n)))
//         } else {
//             node.appendChild(initVNode(dom));
//         }
//     })
//     return node;
// }
// function createClassComp(vnode) {
//     // type 是class的声明
//     const { type, props } = vnode;
//     const component = new type(props);
//     const vdom = component.render();
//     return initVNode(vdom)
// }
// function createFuncComp(vnode) {
//     // type 是函数
//     const { type, props } = vnode;
//     const vdom = type(props);
//     return initVNode(vdom)
// }

// // 1:23:55