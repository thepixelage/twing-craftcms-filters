const {TwingTokenParser} = require('twing');
const {TokenType} = require('twig-lexer');
const TwingNodeCss = require('../nodes/TwingNodeCss');

class TwingTokenParserCss extends TwingTokenParser {
  parse(token) {
    let expr = this.parser.parseExpression();
    this.parser.getStream().expect(TokenType.TAG_END);
    return new TwingNodeCss(expr, token.line, token.column, this.getTag());
  }

  getTag() {
    return 'css';
  }
}

module.exports = TwingTokenParserCss;
