module.exports = function(RED) {

  var ExampleInNode = function(n) {
    RED.nodes.createNode(this, n);
    var node = this;

    var interval = n.number * 1000;

    node.senderInterval = setInterval(function() {
      node.status({fill:"blue",shape:"dot",text:"Sending"});
      setTimeout(function(){
        node.status({});
      }, 1000)

      node.send({
        payload: "timed hello from example-in"
      });
    }, interval);

    node.on('close', function() {
      if (node.senderInterval) {
        clearInterval(node.senderInterval);
      }
    });
  }

  RED.nodes.registerType('example-in', ExampleInNode);
}
