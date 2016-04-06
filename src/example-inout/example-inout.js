module.exports = function(RED) {

  var ExampleInOutNode = function(n) {
    RED.nodes.createNode(this, n);
    var node = this;

    node.on('input', function(msg) {
      var times = parseInt(n.number);
      var output = "";

      for (var i=0; i<times; i++) {
        output = output + msg.payload;
      }

      node.status({fill:"yellow",shape:"ring",text:"Multiplying "+times+" times"});
      setTimeout(function(){
        node.status({});
      }, 1000)

      node.send({
        payload: output
      });
    });
  }

  RED.nodes.registerType('example-inout', ExampleInOutNode);
}
