const {TwingTokenParser} = require('twing');
const {TokenType} = require('twig-lexer');
const TwingNodeJs = require('../nodes/TwingNodeJs');

class TwingTokenParserJs extends TwingTokenParser {
  parse(token) {
    let expr = this.parser.parseExpression();
    this.parser.getStream().expect(TokenType.TAG_END);
    return new TwingNodeJs(expr, token.line, token.column, this.getTag());
  }

  getTag() {
    return 'js';
  }
}

module.exports = TwingTokenParserJs;
