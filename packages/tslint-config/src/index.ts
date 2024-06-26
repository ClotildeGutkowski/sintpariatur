const config = {
  rules: {
    align: [
      true,
      'parameters',
      'statements',
      'members',
      'elements'
    ],
    'array-type': [
      true,
      'array'
    ],
    'arrow-parens': [
      true,
      'ban-single-arg-parens'
    ],
    'arrow-return-shorthand': true,
    'await-promise': true,
    'ban-comma-operator': true,
    'binary-expression-operand-order': true,
    'class-name': true,
    'comment-format': [
      true,
      'check-space',
      'check-uppercase'
    ],
    curly: [
      true,
      'ignore-same-line'
    ],
    'cyclomatic-complexity': [
      true,
      25
    ],
    encoding: true,
    eofline: false,
    forin: false,
    'import-spacing': true,
    indent: [
      true,
      'spaces',
      2
    ],
    'label-position': true,
    'linebreak-style': [
      true,
      'LF'
    ],
    'max-classes-per-file': [
      true,
      1
    ],
    'max-line-length': [
      true,
      200
    ],
    'member-ordering': [
      true,
      {order: 'fields-first'}
    ],
    'newline-before-return': false,
    'no-angle-bracket-type-assertion': true,
    'no-arg': true,
    'no-bitwise': false,
    'no-boolean-literal-compare': true,
    'no-conditional-assignment': true,
    'no-consecutive-blank-lines': [
      true,
      2
    ],
    'no-console': [
      true,
      'log',
      'error',
      'group',
      'groupEnd',
      'groupCollapsed',
      'table',
      'trace'
    ],
    'no-construct': true,
    'no-debugger': true,
    'no-duplicate-imports': true,
    'no-duplicate-super': true,
    'no-duplicate-switch-case': true,
    'no-duplicate-variable': true,
    'no-dynamic-delete': true,
    'no-empty': true,
    'no-empty-interface': true,
    'no-eval': true,
    'no-implicit-dependencies': false,
    'no-invalid-template-strings': true,
    'no-invalid-this': true,
    'no-misused-new': true,
    'no-null-keyword': false,
    'no-object-literal-type-assertion': true,
    'no-reference': true,
    'no-require-imports': false,
    'no-return-await': true,
    'no-shadowed-variable': true,
    'no-sparse-arrays': true,
    'no-string-literal': true,
    'no-string-throw': true,
    'no-this-assignment': true,
    'no-trailing-whitespace': [
      true,
      'ignore-jsdoc'
    ],
    'no-unsafe-finally': true,
    'no-unused-expression': true,
    'no-var-keyword': true,
    'no-var-requires': true,
    'number-literal-format': true,
    'object-literal-key-quotes': [
      true,
      'as-needed'
    ],
    'object-literal-shorthand': [
      true
    ],
    'object-literal-sort-keys': [
      true,
      'match-declaration-order-only'
    ],
    'one-line': [
      true,
      'check-open-brace',
      'check-catch',
      'check-else',
      'check-whitespace'
    ],
    'only-arrow-functions': true,
    'ordered-imports': true,
    'prefer-conditional-expression': [
      true,
      'check-else-if'
    ],
    'prefer-const': [
      true,
      {destructuring: 'all'}
    ],
    'prefer-for-of': true,
    'prefer-method-signature': true,
    'prefer-object-spread': true,
    'prefer-template': true,
    'promise-function-async': false,
    quotemark: [
      true,
      'single',
      'jsx-single'
    ],
    radix: true,
    semicolon: [
      true,
      'always'
    ],
    'space-before-function-paren': [
      true,
      'always'
    ],
    'space-within-parens': [
      true,
      0
    ],
    'switch-default': true,
    'trailing-comma': [
      true,
      {
        multiline: {
          objects: 'always',
          arrays: 'never',
          functions: 'never',
          typeLiterals: 'ignore',
        },
        esSpecCompliant: true,
        singleline: 'never',
      }
    ],
    'triple-equals': true,
    'interface-over-type-literal': false,
    'unnecessary-else': true,
    'no-tautology-expression': true,
    'static-this': true,
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'require-const-for-all-caps'
    ],
  },
};

module.exports = config;
export default config;