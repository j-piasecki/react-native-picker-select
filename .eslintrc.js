module.exports = {
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2022,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        node: true,
        jest: true,
        es6: true,
    },
    globals: {
        shallow: true,
    },
    rules: {
        'import/no-extraneous-dependencies': 0,
        'lodash/import-scope': 0,
        'lodash/prefer-lodash-method': 0,
        'lodash/prefer-noop': 0,
        'react/prop-types': 'off',
    },
};
