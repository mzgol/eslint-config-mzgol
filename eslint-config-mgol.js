'use strict';

module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
    },

    env: {
        es6: true,
    },

    rules: {
        // Rules are divided into sections from http://eslint.org/docs/rules/

        // Possible errors
        'for-direction': 'error',
        'getter-return': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-console': 'off',
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-func-assign': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-loss-of-precision': 'error',
        'no-misleading-character-class': 'error',
        'no-obj-calls': 'error',
        'no-promise-executor-return': 'error',
        'no-prototype-builtins': 'error',
        'no-regex-spaces': 'error',
        'no-setter-return': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'off',
        'no-unreachable': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-useless-backreference': 'error',
        'require-atomic-updates': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',

        // Best practices
        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'block-scoped-var': 'off',
        'class-methods-use-this': 'off',
        complexity: ['warn', 10],
        'consistent-return': 'error',
        curly: 'error',
        'default-case': 'error',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'dot-notation': 'error',
        eqeqeq: ['error', 'allow-null'],
        'grouped-accessor-pairs': 'error',
        'guard-for-in': 'off',
        'max-classes-per-file': 'off',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-constructor-return': 'off',
        'no-div-regex': 'off',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-empty-pattern': 'error',
        'no-eq-null': 'off',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': [
            'error',
            { boolean: false, number: true, string: false },
        ],
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'off',
        'no-iterator': 'error',
        'no-labels': ['error', { allowLoop: true, allowSwitch: true }],
        'no-lone-blocks': 'off',
        'no-loop-func': 'off',
        'no-magic-numbers': 'off',
        'no-multi-str': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-new': 'error',
        'no-octal-escape': 'error',
        'no-octal': 'error',
        'no-param-reassign': 'off',
        'no-process-env': 'off',
        'no-proto': 'error',
        'no-redeclare': 'error',
        // We's use it for _.assign etc. but it won't work for `import {assign} from 'lodash'`.
        'no-restricted-properties': 'off',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-catch': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-with': 'error',
        'prefer-named-capture-group': 'off', // requires ES2018
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'error',
        radix: 'off',
        'require-await': 'off',
        'require-unicode-regexp': 'off',
        'vars-on-top': 'off',
        yoda: 'error',

        // Strict mode
        strict: ['error', 'safe'], // 'global' in Node, 'function' in a browser

        // Variables
        'init-declarations': 'off',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': ['error', 'arguments', 'event'],
        'no-shadow-restricted-names': 'error',
        'no-shadow': 'off',
        'no-undef-init': 'error',
        'no-undef': 'error',
        'no-undefined': 'off',
        'no-unused-vars': [
            'error',
            { vars: 'all', args: 'all', argsIgnorePattern: '^__' },
        ],
        'no-use-before-define': 'off',

        // Node.js and CommonJS
        'callback-return': 'off',
        'global-require': 'off',
        'handle-callback-err': 'error',
        'no-buffer-constructor': 'error',
        'no-mixed-requires': 'off',
        'no-new-require': 'error',
        'no-path-concat': 'off',
        'no-process-exit': 'error',
        'no-restricted-imports': 'off',
        'no-restricted-modules': 'off',
        'no-sync': 'off', // In some projects this might be useful

        // Stylistic issues
        camelcase: 'off',
        'capitalized-comments': 'off',
        'consistent-this': 'off',
        'func-name-matching': 'off',
        'func-names': 'off',
        'func-style': ['error', 'expression'],
        'id-denylist': ['error', 'arguments', 'event'],
        'id-length': 'off',
        'id-match': 'off',
        'line-comment-position': 'off',
        'lines-around-comment': 'off',
        'lines-between-class-members': 'error',
        'max-depth': 'off',
        'max-len': 'off',
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': ['error', { max: 1 }],
        'multiline-comment-style': 'off',
        'new-cap': 'off',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'off',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'off',
        'no-multi-assign': 'off',
        'no-nested-ternary': 'error',
        'no-negated-condition': 'error',
        'no-new-object': 'error',
        'no-plusplus': 'off',
        // 'WithStatement' is already handled via no-with:
        'no-restricted-syntax': [
            'error',
            {
                selector: 'CallExpression[callee.name="fdescribe"]',
                message: 'Using `fdescribe` is not allowed',
            },
            {
                selector:
                    'CallExpression[callee.object.name="describe"]' +
                    '[callee.property.name="only"]',
                message: 'Using `describe.only` is not allowed',
            },
            {
                selector: 'CallExpression[callee.name="fit"]',
                message: 'Using `fit` is not allowed',
            },
            {
                selector:
                    'CallExpression[callee.object.name="it"][callee.property.name="only"]',
                message: 'Using `it.only` is not allowed',
            },
            {
                selector: 'SequenceExpression',
                message: 'Comma expressions are disallowed',
            },
        ],
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-underscore-dangle': 'off',
        'no-unneeded-ternary': 'error',
        'one-var': ['error', { initialized: 'never' }],
        'operator-assignment': 'error',
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: 'directive', next: '*' },
            {
                blankLine: 'always',
                prev: 'import',
                next: ['const', 'let', 'class', 'block-like'],
            },
        ],
        'prefer-exponentiation-operator': 'error',
        'prefer-object-spread': 'error',
        quotes: 'off',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'sort-imports': 'off', // It sorts by the member syntax, not by module names
        'symbol-description': 'error',
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    exceptions: ['/'],
                },
                block: {
                    markers: ['*', '**', '!'],
                },
            },
        ],

        // ECMAScript 6
        'arrow-body-style': ['error', 'as-needed'],
        'constructor-super': 'error',
        'no-class-assign': 'error',
        'no-confusing-arrow': 'off',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'error',
        'no-new-symbol': 'error',
        'no-restricted-exports': 'off',
        'no-this-before-super': 'error',
        'no-var': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-spread': 'error',
        'prefer-rest-params': 'error',
        'prefer-template': 'error',
        'require-yield': 'off',
    },
};
