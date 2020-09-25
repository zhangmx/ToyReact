import {createElement, render,Component} from "./toy-react.js"

class MyComponent extends Component{
    constructor(){
        super();
        this.state = {
            a: 1,
            b: 2
        }
    }

    render(){
        return <div>
            <h1>yyyy</h1>
            <div>{this.state.a.toString()}xxxxx{this.state.b.toString()}</div>
            {this.children}
        </div>;

    }
}

render(
    <div id="test" className="good">
        <div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
        <MyComponent>
        </MyComponent>
    </div>
,document.body);