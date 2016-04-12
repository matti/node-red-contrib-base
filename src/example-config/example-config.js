module.exports = function(RED) {

  var ExampleConfigNode = function(n) {
    RED.nodes.createNode(this, n);
    var node = this;
  }

  RED.nodes.registerType('example-config', ExampleConfigNode);
}
