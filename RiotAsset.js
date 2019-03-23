const { compile } = require('riot-compiler');
const { Asset } = require('parcel-bundler');
const preamble = "const riot = require('riot');\n";

class RiotAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'js';
  }

  async generate() {
    const riotOpts = (await this.getConfig(['.riotrc', '.riotrc.js', 'riot.config.js'])) || {};

    let code = compile(this.contents, riotOpts, this.name);
    code = `${ preamble }${ code }`;
    this.contents = code;

    return [
      {
        type: 'js',
        value: this.contents
      }
    ];
  }
}

module.exports = RiotAsset;
