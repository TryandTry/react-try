
/*propTypes 設定外部傳入的參數型別*/
 var Car = function (wheel, brand) {
	   this.wheel = wheel;
	   this.brand = brand;
 };

var PropTyoes=React.createClass({
	propTypes:{
		array	   :React.PropTypes.array    ,       // 陣列
		bool	   :React.PropTypes.bool.isRequired ,// Boolean 且必要。
		func	   :React.PropTypes.func,            // 函式
		number 	   :React.PropTypes.number,          // 數字
		obj		   :React.PropTypes.object ,         // 物件
		string	   :React.PropTypes.string ,         // 字串
		node 	   :React.PropTypes.node  ,          // 任何類型   : numbers, strings, elements 或者任何這種類型的陣列
		element    :React.PropTypes.element ,        // React 元素
		instanceOf :React.PropTypes.instanceOf(Car), // 某種XXX類別的實體
		oneOf 	   :React.PropTypes.oneOf(['foo', 'bar']), // 其中一個字串
		oneOfType  :React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]), // 其中一種格式類型
		arrayOf	   :React.PropTypes.arrayOf(React.PropTypes.string) , // 某種類型的陣列(字串類型)
		objectOf   :React.PropTypes.objectOf(React.PropTypes.string), // 具有某種屬性類型的物件(字串類型)
		shape	   :React.PropTypes.shape({                          // 需符合指定格式的物件
		  	color: React.PropTypes.string,
		  	fontSize: React.PropTypes.number
		}),
		any        :React.PropTypes.any.isRequired  // 可以是任何格式，且必要。
	},
	getDefaultProps:function(){
		return ({
			array     : ["a",1,null],
			bool      : false,
			func      : function(){ return "is Fun" },
			number	  : 1,
			obj       : {id: "ID"},
			instanceOf: new Car(4, 'Toyota'),
			any       : 1
		});
	},
	render:function () {
		return (
			<div>
				123:{this.props.bool}
			</div>
		);
	}
});

React.render(<PropTyoes />,document.getElementById("PropTyoes"))
