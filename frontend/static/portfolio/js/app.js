var HomePage = React.createClass({displayName: 'HomePage',
  render: function() {
    return (
      React.createElement('div', {className: "home-page"},
        "Hello, world! I am a CommentBox."
      )
    );
  }
});

ReactDOM.render(
  React.createElement(HomePage, null),
  document.getElementById('app')
);