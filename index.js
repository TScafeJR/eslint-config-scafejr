module.exports = {
    'globals': {
        'MyGlobal': true
    },
    'env': {
        'mocha': true,
        'es6': true
    },
    'rules': {
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'never',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never'
        }],
        'semi': ['error', 'always'],
        'space-before-function-paren': ['error', 'never'],
        'quotes': ['error', 'single'],
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'error',
        'no-extra-semi': 'error',
        'no-irregular-whitespace': 'error',
        'no-unreachable': 'error',
        'curly': ['error', 'all'],
        'dot-location': ['error', 'object'],
        'eqeqeq': ['error', 'smart'],
        'no-multi-spaces': 'error',
        'no-self-assign': 'error',
        'no-shadow-restricted-names': 'error',
        'camelcase': 'error',
        'comma-spacing': ['error', {
            'before': false,
            'after': true
        }],
        'max-len': ['error', {
            'code': 100,
            'tabWidth': 4,
            'ignoreComments': true,
            'ignoreTrailingComments': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true
        }],
        'no-lonely-if': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-unneeded-ternary': 'error',
        'object-curly-spacing': ['error', 'always', {'objectsInObjects': true}],
        'space-in-parens': ['error', 'never'],
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': 'error',
        'no-const-assign': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'dot-notation': ['error', {'allowKeywords': true}],
        'quote-props': ['error', 'consistent-as-needed'],
        'prefer-destructuring': ['error', {
            'array': false,
            'object': true
        }, {
            'enforceForRenamedProperties': false
        }]
    }
};


