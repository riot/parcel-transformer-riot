module.exports = function(bundler) {
  bundler.addAssetType('riot', require.resolve('./RiotAsset'))
}
