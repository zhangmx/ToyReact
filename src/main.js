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
            <h1>my Component</h1>
            <button onclick={()=>{this.state.a++ ; this.rerender();}}>add</button>
            <div>{this.state.a.toString()} ==== {this.state.b.toString()}</div>
            
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