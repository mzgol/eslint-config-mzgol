'use strict';

module.exports = {
    env: {
        es6: true,
    },

    rules: {
        // Rules are divided into sections from http://eslint.org/docs/rules/

        // Possible errors
        'comma-dangle': [2, 'always-multiline'],
        'no-cond-assign': 2,
        'no-console': 0,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-empty': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': 0,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-unreachable': 2,
        'use-isnan': 2,
        'valid-jsdoc': 0, // TODO enable?
        'valid-typeof': 2,
        'no-unexpected-multiline': 0,

        // Best practices
        'accessor-pairs': 2,
        'block-scoped-var': 0,
        complexity: [1, 10],
        'consistent-return': 2,
        curly: 2,
        'default-case': 2,
        'dot-notation': 2,
        'dot-location': [2, 'property'],
        eqeqeq: [2, 'smart'],
        'guard-for-in': 0,
        'no-alert': 2,
        'no-caller': 2,
        'no-div-regex': 0,
        'no-else-return': 2,
        'no-empty-label': 2,
        'no-eq-null': 0,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-implicit-coercion': [2, {boolean: false, number: true, string: false}],
        'no-implied-eval': 2,
        'no-invalid-this': 0,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 0,
        'no-loop-func': 0,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-octal-escape': 2,
        'no-octal': 2,
        'no-param-reassign': 0,
        'no-process-env': 0,
        'no-proto': 2,
        'no-redeclare': 0, // not useful with const/let
        'no-return-assign': 2,
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unused-expressions': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-void': 2,
        'no-warning-comments': 0,
        'no-with': 2,
        radix: 0,
        'vars-on-top': 0,
        'wrap-iife': [2, 'inside'],
        yoda: 2,

        // Strict mode
        strict: [2, 'global'], // 'global' in Node, 'function' in a browser

        // Variables
        'init-declarations': 0,
        'no-catch-shadow': 0,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-shadow-restricted-names': 2,
        'no-shadow': 0,
        'no-undef-init': 2,
        'no-undef': 2,
        'no-undefined': 0,
        'no-unused-vars': [2, {args: 'all', argsIgnorePattern: '^_'}],
        'no-use-before-define': 0,

        // Node.js
        'callback-return': 0,
        'global-require': 0,
        'handle-callback-err': 2,
        'no-mixed-requires': 0,
        'no-new-require': 2,
        'no-path-concat': 0,
        'no-process-exit': 2,
        'no-restricted-modules': 0,
        'no-sync': 0, // in some projects this might be useful

        // Stylistic issues
        'array-bracket-spacing': [2, 'never'],
        'block-spacing': [2, 'never'],
        'brace-style': 2,
        camelcase: 0,
        'comma-spacing': 2,
        'comma-style': 2,
        'computed-property-spacing': [2, 'never'],
        'consistent-this': 0,
        'eol-last': 2,
        'func-names': 0,
        'func-style': [2, 'expression'],
        'id-length': 0,
        'id-match': 0,
        indent: 0, // TODO try to enable it
        'jsx-quotes': 0,
        'key-spacing': 2,

        // Re-enable when commented out lines * ESLint pragmas work; was:
        // [2, {beforeBlockComment: true, beforeLineComment: true, allowBlockStart: true}],
        'lines-around-comment': 0,
        'linebreak-style': 0,
        'max-nested-callbacks': 0,
        'new-cap': 2,
        'new-parens': 2,
        'newline-after-var': 0,
        'no-array-constructor': 2,
        'no-continue': 0,
        'no-inline-comments': 0,
        'no-lonely-if': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [2, {max: 2}],
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-restricted-syntax': 0, // already handled via no-with; would be: [2, 'WithStatement'],
        'no-spaced-func': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 2,
        'object-curly-spacing': [2, 'never'],
        'one-var': [2, {
            uninitialized: 'always',
            initialized: 'never',
        }],
        'operator-assignment': 2,
        'operator-linebreak': [2, 'after'],
        'padded-blocks': 0,
        'quote-props': [2, 'as-needed'],
        quotes: [2, 'single'],
        'require-jsdoc': 0,
        'semi-spacing': 2,
        semi: 2,
        'sort-vars': 0,
        'space-after-keywords': 2,
        'space-before-keywords': 2,
        'space-before-blocks': 2,
        'space-before-function-paren': [2, {anonymous: 'always', named: 'never'}],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-return-throw-case': 2,
        'space-unary-ops': 2,
        'spaced-comment': 2,
        'wrap-regex': 0,

        // ECMAScript 6
        'arrow-parens': [2, 'as-needed'],
        'arrow-spacing': 2,
        'constructor-super': 2,
        'generator-star-spacing': [2, {before: true, after: false}],
        'no-class-assign': 2,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-this-before-super': 2,
        'no-var': 2,
        'object-shorthand': 2,
        'prefer-arrow-callback': 0, // TODO enable in Node 5 (requires rest support)
        'prefer-const': 2,
        'prefer-spread': 0, // TODO enable in Node 5
        'prefer-reflect': 0, // TODO enable in Node 5
        'prefer-template': 2,
        'require-yield': 0,

        // Legacy
        'max-depth': 0,
        'max-len': [2, 100, 4, {ignoreUrls: true}],
        'max-params': 0,
        'max-statements': 0,
        'no-bitwise': 2,
        'no-plusplus': 0,
    },
};
