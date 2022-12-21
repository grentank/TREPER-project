# Что делать и почему именно так?

TREPER - Typescript React Eslint Prettier Express Redux :-)

1. Создаём CRA на typescript

`npx create-react-app folder-name --template typescript`

2. Настраиваем eslint

`npx eslint --init`

- БЕЗ TS
- AirBnb
- JSON формат

3. Устанавливаем typescript-eslint

[Документация (getting started)](https://typescript-eslint.io/getting-started)

- `npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin`
- Потом всё, что в документации сказано

4. Устанавливаем airbnb для typescript

[Ссылка на NPM-пакет](https://www.npmjs.com/package/eslint-config-airbnb-typescript)

- `npm i -D eslint-config-airbnb-typescript`
- Прописать в конфиге, как в документации

5. Модифицируем `package.json`

Убираем `"eslintConfig"` из package.json и добавляем в конфиг eslint

```json
{
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  }
}
```

Убираем и добавляем в `"extends"` в файле `eslintrc.json` (потому что eslint не увидит этих расширений из `package.json`)

6. Устанавливаем и настраиваем Prettier

`npm i -D prettier eslint-config-prettier`

- Добавляем в конец `.eslintrc -> "extends" -> "prettier"` для отключения правил eslint в пользу prettier
- не путать с `eslint-plugin-prettier`, который преобразует правила prettier в правила eslint
- Создаём файл `.prettierrc` и вставляем ваш шаблон форматирования, например:

```json
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "useTabs": false,
  "arrowParens": "always",
  "jsxSingleQuote": false
}
```

7. Добавляем правила `.eslintrc -> "rules"`

```json
{
  "@typescript-eslint/consistent-type-imports": [
    // импорты type
    "error",
    { "prefer": "type-imports" }
  ],
  "@typescript-eslint/explicit-function-return-type": [
    // типизация return
    2,
    {
      "allowExpressions": true,
      "allowTypedFunctionExpressions": true,
      "allowHigherOrderFunctions": true,
      "allowDirectConstAssertionInArrowFunctions": true
    }
  ],
  "@typescript-eslint/switch-exhaustiveness-check": 2, // switch-case по всем
  "@typescript-eslint/consistent-type-definitions": ["error", "type"] // без interface
}
```

8. Настраиваем VSCode для форматирования prettier+eslint в файле `settings.json` пишем:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // ESLint auto format on save
  },
  "editor.formatOnSave": true, // Prettier auto format on save
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

9. Eslint добавить правило: `"ignorePatterns": ['.eslintrc.js'],`
