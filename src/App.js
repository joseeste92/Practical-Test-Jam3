var React = require('react');

var NavBar = require('./NavBar.js');

var App = React.createClass({
  render: function() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}) 

module.exports = App;
