import {createElement, render,Component} from "./toy-react.js"

class MyComponent extends Component{
    constructor(){

    }

    setAttribute(name,value){

    }
    appendChild(){

    }
}

render(
    <div id="test" className="good">
        <div>
            <div>
                <div>xxxxx</div>
                <div></div>
            </div>
        </div>
        <MyComponent></MyComponent>
    </div>
,document.body);