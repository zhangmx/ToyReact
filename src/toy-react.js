const RENDER_TO_DOM = Symbol("render to dom");


class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(component) {
        let range = document.createRange();
        range.setStart(this.root, this.root.childNodes.length);
        range.setEnd(this.root, this.root.childNodes.length);
        component[RENDER_TO_DOM](range);
    }

    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root);
    }
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }

    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root)

    }
}

export class Component {
    constructor() {
        this.props = Object.create(null);
        this.children = [];
        this._root = null;
        this._range = null;
    }

    setAttribute(name, value) {
        this.props[name] = value;
    }

    appendChild(component) {
        this.children.push(component);
    }
    // range api    
    [RENDER_TO_DOM](range) {
        this._range = range;
        this.render()[RENDER_TO_DOM](range)
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

    let insertChildren = (children) => {
        for (let child of children) {
            if (typeof child === "string") {
                child = new TextWrapper(child);
            }
            if (child === null) {
                continue;
            }
            if (typeof child === "object" && child instanceof Array) {
                insertChildren(child);
            } else {
                e.appendChild(child);
            }

        }
    }

    insertChildren(children);

    return e;
}

// component
export function render(element, parentElement) {
    let range = document.createRange();
    range.setStart(parentElement, 0)
    range.setEnd(parentElement, parentElement.childNodes.length)
    range.deleteContents();
    element[RENDER_TO_DOM](range);
}