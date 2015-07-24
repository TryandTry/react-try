
var DivTest=React.createClass({
	changeTab:function(Tab){
		this.setProps({active:Tab.Id});
		this.props.change();
	},
	render: function() {
		return (
			<div> {this.props.active}
				<ul className="nav nav-tabs">
				{
					this.props.data.map(function(item,i){
						var boundClick = this.changeTab.bind(this,item);
						var liClass=this.props.active===item.Id ?'active':''
						return (
							<li key={i} className={liClass} >
								<a onClick={boundClick}>
									{item.TabName}
								</a>
							</li>
						)

					}.bind(this))
				}
				</ul>
			</div>
		);
	}

});


var h2o =angular.module("app",[]);

h2o.controller('appCtrl', ['$scope', function($scope){
	$scope.active=0;

	$scope.TabData=[
		{Id:0,TabName:"tab1",TabContent:"tab content1"},
		{Id:1,TabName:"tab2",TabContent:"tab content2"},
		{Id:2,TabName:"tab3",TabContent:"tab content3"}
	]
	$scope.change=function(){
		console.log("change");
	}
	$scope.changTab=function(id){
		$scope.active=id;
		React.render(<DivTest data={$scope.TabData} active={$scope.active} change={$scope.change}/>,document.getElementById("ngDiv"));
	}

}]);