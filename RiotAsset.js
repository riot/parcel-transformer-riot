const { compile } = require('riot-compiler');
const JSAsset = require('parcel-bundler/src/assets/JSAsset');
const preamble = "const riot = require('riot');\n";

class RiotAsset extends JSAsset {

  async parse(inputCode) {
    const riotOpts = {};

    let code = compile(inputCode, riotOpts, this.name);
    code = `${ preamble }${ code }`;
    this.contents = code;

    return super.parse(this.contents);
  }
}

module.exports = RiotAsset;
