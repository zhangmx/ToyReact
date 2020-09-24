class ElementWrapper{
    constructor(type){

    }

    setAttribute(name,value){

    }
    appendChild(){

    }

}

class TextWrapper {
    constructor(content){

    }

    appendChild(){

    }
}

class Component {
    constructor(content){

    }

    setAttribute(name,value){
        
    }

    appendChild(){

    }
}


export function createElement(tagName, attributes, ...children) {
    let e;
    if (typeof tagName === "string") {
        e = document.createElement(tagName);
    } else {
        e = new tagName;
    }

    for (let p in attributes) {
        e.setAttribute(p, attributes[p]);
    }

    for (let child of children) {
        if (typeof child === "string") {
            child = document.createTextNode(child);
        }
        e.appendChild(child);
    }

    return e;
}

// component
export function render(element,parentElement) {

}