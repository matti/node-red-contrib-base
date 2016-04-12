module.exports = function(RED) {

  var ExampleConfigSecretsNode = function(n) {
    RED.nodes.createNode(this, n);
    var node = this;
  }

  RED.nodes.registerType('example-config-secrets', ExampleConfigSecretsNode);
}
