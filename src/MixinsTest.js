
/*mixins 可以混和其他的React 但是混和之後state是各自獨立的*/

var ReactMixins={
	getInitialState:function(){
		return {count:0}
	},
	componentWillMount:function(){
		console.log("Will mount");
	},
	addCount:function(){
		this.setState({count:this.state.count+1});
	}

};


var Label=React.createClass({
	mixins:[ReactMixins],
 	componentWillMount:function(){
    	setInterval(this.addCount,1000);
  	},
	render:function () {
		return(
			<label>
				{this.props.txt}- {this.state.count}
			</label>
		);
	}
});

var Btn=React.createClass({
	mixins:[ReactMixins],
	update:function(){
		this.addCount();
	},
	render:function () {
		return(
			<button onClick={this.update}>
				{this.props.txt}- {this.state.count}
			</button>
		);
	}
});

var Mixins=React.createClass({
	render:function () {
		return (
			<div>
				<Btn  txt="this is btn" />
				<br/>
				<Label  txt="this is lable" />
			</div>
		);
	}
});

React.render(<Mixins />,document.getElementById("MixinsDiv"));
