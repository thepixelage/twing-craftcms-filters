const {TwingNode} = require('twing');

class TwingNodeCss extends TwingNode {
  constructor(expr, lineno, columnno, tag = null) {
    super(new Map([['expr', expr]]), new Map(), lineno, columnno, tag);
  }

  compile(compiler) {
    compiler
      .subcompile(this.getNode('expr'), true)
      .raw(";\n");
  }
}

module.exports = TwingNodeCss;
