module.exports = function(bundler) {
  bundler.addAssetType('tag', require.resolve('./RiotAsset'))
}
