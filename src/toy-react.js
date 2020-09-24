class ElementWrapper{
    constructor(type){
        this.root = document.createElement(type);
    }

    setAttribute(name,value){
        this.root.setAttribute(name,value);
    }
    appendChild(component){
        this.root.appendChild(component.root)
    }

}

class TextWrapper {
    constructor(content){
        this.root = document.createTextNode(content);
    }
}

export class Component {
    constructor(content){
        this.props = Object.create(null);
        this.children = [];
        this._root = null;
    }

    setAttribute(name,value){
        this.props[name] = value;
    }

    appendChild(component){
        this.children.push(component);
    }

    get root(){
        if(!this._root) {
            this._root =this.render().root;
        }
        return this._root;
    }
}


export function createElement(tagName, attributes, ...children) {
    let e;
    if (typeof tagName === "string") {
        e = new ElementWrapper(tagName);
    } else {
        e = new tagName;
    }

    for (let p in attributes) {
        e.setAttribute(p, attributes[p]);
    }

    for (let child of children) {
        if (typeof child === "string") {
            child = new TextWrapper(child);
        }
        e.appendChild(child);
    }

    return e;
}

// component
export function render(element,parentElement) {
    parentElement.appendChild(element.root);
}