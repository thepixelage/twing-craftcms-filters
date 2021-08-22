const {TwingExtension} = require('twing');
const TwingTokenParserCss = require('./parsers/TwingTokenParserCss');
const TwingTokenParserJs = require('./parsers/TwingTokenParserJs');

class CraftTwingExtension extends TwingExtension {
  getTokenParsers() {
    return [
      new TwingTokenParserCss(),
      new TwingTokenParserJs()
    ];
  }
}

module.exports = CraftTwingExtension;
