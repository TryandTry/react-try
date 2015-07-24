
/*透過map 動態生成 talbe 須設定key(唯一值)*/

var Table=React.createClass({
	getInitialState:function  () {
		return ({
			data: [{"id":1,"fname":"Manish","lname":"Crosswhite"},{"id":2,"fname":"Atul","lname":"Groll"},{"id":3,"fname":"Jitender","lname":"Symes"},{"id":4,"fname":"Eva","lname":"Fox"},{"id":5,"fname":"Haidi","lname":"Szymanski"}]
		});
	},
	render:function(){
		return (
			<table>
				return <Row  data={this.state.data[0]}/>
			</table>
		);
	}

});

var Row=React.createClass({
	render:function(){
		return (
			<tr >
				<td>{this.props.data.id}</td>
				<td>{this.props.data.fname}</td>
				<td>{this.props.data.lname}</td>
			</tr>
		);
	}
});

React.render(<Table />,document.getElementById("MapTest"))
