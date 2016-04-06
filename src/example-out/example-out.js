module.exports = function(RED) {

  var ExampleOutNode = function(n) {
    RED.nodes.createNode(this, n);
    var node = this;

    node.on('input', function(msg) {
      var times = parseInt(n.number);

      node.status({fill:"green",shape:"dot",text:"Outputting to debug "+times+" times."});
      setTimeout(function(){
        node.status({});
      }, 1000)

      for (var i=0; i<times; i++) {
        node.warn(JSON.stringify(msg));
      }
    });
  }

  RED.nodes.registerType('example-out', ExampleOutNode);
}
