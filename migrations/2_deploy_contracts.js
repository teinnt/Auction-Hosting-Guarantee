const ItemFactory = artifacts.require('ItemFactory')

module.exports = function (deployer) {
  deployer.deploy(ItemFactory)
}
