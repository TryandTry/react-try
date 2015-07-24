
var datas=[
    {id: 0, name: "mia"},
    {id: 1, name: "ruey"}
];

/*
componentWillReceiveProps --> Props被異動時
shouldComponentUpdate -->Props 及State變動進入 確定是否更新Dom 當回傳true會執行 render
componentDidUpdate-->更新Dom 執行render 時進入
*/
var ReceiveProps=React.createClass({
    getInitialState:function(){
        return {scy:false}
    },
    /*Props 及State變動進入 確定是否更新Dom 當回傳true會執行 render*/
    shouldComponentUpdate:function(nextProps,nexState){
        console.log('Props 及State變動進入 shouldComponentUpdate' ,`Pross:${nextProps.val}`, `start:${nexState.scy}`);
        return nextProps.val%5===0;
    },
    /*Props被異動時*/
    componentWillReceiveProps:function(noexProps){

        console.log("Props被異動時 compoentWillReceiveProps", `原始:${this.props.val}` , `異動後:${noexProps.val}`);
        this.setState({
            scy:noexProps.val>this.props.val
        });

    },
    /*更新Dom 執行render完進入*/
    componentDidUpdate: function(prevProps, prevState) {
        console.log("componentDidUpdate");
       /* console.log('prevProps', prevProps);
        console.log('prevState', prevState);*/

    },update:function(){
       this.setProps({val:this.props.val+1})
    },render:function(){
        console.log("執行render");
        return (
            <button onClick={this.update}>
                ReceiveProps:{this.props.val}
            </button>
        )

    }
});
React.render(<ReceiveProps val={0} />,document.getElementById("ReceivePropsTest"))


/*componentWillMount componentDidMount componentWillUnmount*/
var Button=React.createClass({
  /*初始化State */
    getInitialState:function(){
        console.log("getInitialState")
        return {val:0} ;
    },
    /*Component 初始化執行一次 */
    componentWillMount:function(){
        console.log("mount")
        this.setState({m:parseInt(2,10)});
    },
     /*Component 初始完成執行一次*/
    componentDidMount:function(){
        this.inc= setInterval(this.update, 500);
    },
     /*Component 被除役執行一次 */
    componentWillUnmount:function(){
        console.log("Unmount")
        clearInterval(this.inc)
    },
    update:function(){

      this.setState({val:this.state.val+1});
    },
    render:function(){
        console.log("render")
        return ( <button onClick={this.update}> {this.state.val} * {this.state.m} = {this.state.val*this.state.m} </button>)

    }
});

var App=React.createClass({
    AddBtn:function(){
        /*加入一個 Compoent*/
        React.render(<Button data={this.props.data}/>,document.getElementById("div1") )
    },
    DeleteBtn:function(){
        /*移除一個 Compoent*/
        React.unmountComponentAtNode(document.getElementById("div1"));
    },
    render:function(){

    return (
        <div>
            <input type="button" onClick={this.AddBtn} value="Add BTN" data={this.props.data} />
            <input type="button" onClick={this.DeleteBtn} value="Delete BTN" data={this.props.data}/>
            <div id="div1"></div>
        </div>
    );
    }
});

var AddNode=function(){
    React.render(<Button val={0} />,document.getElementById("componentMountTest"));
}

var deleteNode=function(){
    React.unmountComponentAtNode(document.getElementById("componentMountTest"));
}

React.render(<App data={datas}/> ,document.getElementById("componentMountTest"));
