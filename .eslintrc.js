module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "ignorePatterns": [
        "node_modules",
        "target",
        "types"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/indent": [
            "error",
            2
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": true
                }
            }
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/type-annotation-spacing": "error",
        "brace-style": [
            "error",
            "1tbs"
        ],
        "camelcase": "error",
        "comma-spacing": ["error", { "before": false, "after": true }],
        "curly": "error",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "func-call-spacing": ["error", "never"],
        "guard-for-in": "error",
        "id-blacklist": "error",
        "id-match": "error",
        "keyword-spacing": ["error", { "overrides": {
            "if": { "after": false },
            "for": { "after": false },
            "while": { "after": false }
          } }],
        "max-len": [
            "error",
            {
                "code": 160
            }
        ],
        "no-bitwise": "error",
        "no-caller": "error",
        "no-console": [
            "off",
            {
                "allow": [
                    "warn",
                    "dir",
                    "timeLog",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupEnd",
                    "table",
                    "dirxml",
                    "error",
                    "groupCollapsed",
                    "Console",
                    "profile",
                    "profileEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-debugger": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-multi-spaces": "error",
        "no-new-wrappers": "error",
        "no-redeclare": "error",
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-trailing-spaces": "error",
        "no-underscore-dangle": "error",
        "no-unused-labels": "error",
        "no-var": "error",
        "radix": "error",
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": ["error"],
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "whitespace": [
                        true,
                        "check-decl",
                        "check-operator",
                        "check-separator",
                        "check-type"
                    ]
                }
            }
        ]
    }
};
