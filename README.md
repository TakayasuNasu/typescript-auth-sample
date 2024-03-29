# Auth Sample - uses Json Web Token

- eslint settings
  - **Reference**
  - [React\+TSプロジェクトで便利だったLint/Format設定紹介](https://zenn.dev/knowledgework/articles/0994f518015c04)
  - [ESLintのeslintrcをFlat Configに移行してみた](https://zenn.dev/keita_hino/articles/798bf62c6db663)

## About ESLint

ESLint v9 で `flat config` がデフォルトになり、`eslintrc` は非推奨になる。
In terms of ESLint version 9, `flat config` becomes the default setting, and `eslintrc` is deprecated.

## husky and lint-stage

- [lint\-staged/lint\-staged: 🚫💩 — Run linters on git staged files](https://github.com/lint-staged/lint-staged)
- [typicode/husky: Git hooks made easy 🐶 woof\!](https://github.com/typicode/husky)
- [【2024/01最新】husky \+ lint\-staged でコミット前にlintを強制する方法](https://zenn.dev/risu729/articles/latest-husky-lint-staged)

> [!NOTE] > `husky` is configured differently in different versions.

## ESModule can't find path alias

- [ESM で実行する ts\-node で paths のエイリアスを解決する](https://kimuson.dev/blog/typescript/ts_node_esm_paths/)
- [ts\-node や nestjs で絶対パスと ESM を同時に使う](https://zenn.dev/sun_yryr/scraps/83fb774133ae9a)

## Test

```bash
npm test
```

- [JWT の仕組み](https://zenn.dev/mikakane/articles/tutorial_for_jwt)
