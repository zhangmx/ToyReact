import {createElement, render,Component} from "./toy-react.js"

class MyComponent extends Component{
    render(){
        return <div>yyy</div>

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