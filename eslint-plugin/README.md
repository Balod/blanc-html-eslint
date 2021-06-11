# `blanc-html-eslint/eslint-plugin`

An ESLint plugin which provides lint class names order for HTML.
Based on [@html-eslint](https://github.com/yeonjuan/html-eslint)
Using [@html-eslint/parser](https://github.com/yeonjuan/html-eslint)

## Settings
Add in your .eslintrc config file this code:
```
{
//...
"plugins": ["eslint-plugin-blanc"],
    "overrides": [
        {
          "files": ["*.html"],
          "parser": "eslint-plugin-blanc/parser",
          "extends": ["plugin:eslint-plugin-blanc/recommended"]
        }
    ]
}
```