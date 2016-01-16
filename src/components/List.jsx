var React = require('react');
var ListItem = require('./ListItem.jsx');
var HTTP = require('../services/httpService');

var List = React.createClass({
    getInitialState: function(){
      return {ingredients:[]};  
    },
    componentWillMount: function(){
       console.log("Getting weather in toronto")
       HTTP.get('/weather?q=toronto')
       .then(function(data){
          console.log("DATA: " + data)
          this.setState({ingredients: data}); 
       }.bind(this));
    },
    render: function(){
      var listItems = this.state.ingredients.map(function(item){
        return <ListItem key={item.id} ingredient={item.text} />;
      });

      return (<ul>{listItems}</ul>);
    }
});

module.exports = List;
