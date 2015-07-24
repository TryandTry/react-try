
var catalog = [
  {
    Id: 1,
    price: 5,
    description: 'this is a <b>cool</b> product'
  },
  {
    Id: 2,
    price: 5,
    description: '<span style="color:blue">this is a cool product</span>'
  },
  {
    Id: 3,
    price: 5,
    description: '<b>this</b> is a cool product'
  },
  {
    Id: 4,
    price: 5,
    description: '<b><i>this</i> is the coolest product!</b>'
  },
  {
    Id: 5,
    price: 5,
    description: '<span style="color:red">this is a cool product</span>'
  },
  {
    Id: 6,
    price: 5,
    description: 'this is a <i>cool</i> product'
  }
];

var InnerHTML = React.createClass({
	getInitialState: function() {
		return {
			val: catalog
		};
	},
	render: function() {
		return (
			<ul>
      		{
      			this.state.val.map(function(item){
      				/*透過這一段將html插到頁面上
      				dangerouslySetInnerHTML={{__html: item.description}} */
      				return <li dangerouslySetInnerHTML={{__html: item.description}} ></li>
      			})
      		}
			</ul>
		);
	}

});

React.render(<InnerHTML />,document.getElementById("innerHtml"));
