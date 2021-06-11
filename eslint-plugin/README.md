# `@blanc-html-eslint/eslint-plugin`

An ESLint plugin which provides lint class names order for HTML.
Based on [@html-eslint](https://github.com/yeonjuan/html-eslint)
Using [@html-eslint/parser](https://github.com/yeonjuan/html-eslint)

## Settings
Add in your .eslintrc config file this code:
```
{
//...
"plugins": ["@blanc-html-eslint"],
    "overrides": [
        {
          "files": ["*.html"],
          "parser": "@blanc-html-eslint/parser",
          "extends": ["plugin:@blanc-html-eslint/recommended"]
        }
    ]
}
```