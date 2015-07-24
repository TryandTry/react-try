
var CommentBox = React.createClass({
    getData: function() {
        return [
            {
                author: "Pete Hunt",
                text: "This is one comment"
            },
            {
                author: "Jordan Walke",
                text: "This is *another* comment"
            }
        ];
    },
    getInitialState: function() {
        return {
            data: []
        };
    },
    commentSubmit: function(obj) {
        var comments = this.state.data;
        var newComments = comments.concat([obj]);
        this.setState({
            data: newComments
        });

    },
    componentWillMount: function() {
        this.setState({
            data: this.getData()
        });
    },
    render: function() {
        return (
            <div className = "commentBox">
		         <h1> comment Box </h1>
		         <CommentList data = {  this.state.data } />
		         <CommentForm commentSubmit = {this.commentSubmit}/>
	         </div>
        );
    }
});

var converter = new Showdown.converter();
var Comment = React.createClass({
    render: function() {
        var rawMarkup = converter.makeHtml(this.props.children.toString());
        return (
            <div className = "comment">
                	<h2 className = "commentAuthor"> { this.props.author} </h2>
                	<span > {this.props.children.toString()} </span>
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        var commentNode = this.props.data.map(function(comment) {
            return <Comment author = {comment.author }> { comment.text } </Comment>;
        });

        return (
            <div className = "commentList">
                {commentNode}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    isSubmit: function() {

        var author = this.refs.author.getDOMNode().value.trim();
        var text = this.refs.text.getDOMNode().value.trim();

        this.props.commentSubmit({
            author: author,
            text: text
        });

        this.refs.author.getDOMNode().value = "";
        this.refs.text.getDOMNode().value = "";

        return false;
    },
    render: function() {
        return (
            <form className = "commentForm"  onSubmit = { this.isSubmit }>
	            <input type= "text" placeholder= "name"  ref="author" />
	            <input type= "text"  placeholder= "say something"  ref = "text" />
	            <input type= "submit" value = "Post" />
	         </form>
        );
    }
});

React.render( <CommentBox /> , document.getElementById("content"));
