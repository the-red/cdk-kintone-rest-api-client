# CDK kintone Rest API Client

CDK経由でLambda関数を作成する際に、kintone REST API Clientがエラーになる件の調査用リポジトリ

## ディレクトリ構成

* CDK: [bin](./bin), [lib](./lib)
* Lambda: [lambda](./lambda)

## Lambdaへのデプロイ方法（AWS CLIが設定済みの前提）

```
git clone https://github.com/the-red/cdk-kintone-rest-api-client.git
cd cdk-kintone-rest-api-client
yarn install
yarn deploy
```

## エラー詳細
デプロイ後にLambda関数を実行すると、`new KintoneRestAPIClient()` を呼んだ時点でエラーが発生する。

```
{
  "errorType": "TypeError",
  "errorMessage": "The argument 'filename' must be a file URL object, file URL string, or absolute path string. Received undefined",
  "trace": [
    "TypeError [ERR_INVALID_ARG_VALUE]: The argument 'filename' must be a file URL object, file URL string, or absolute path string. Received undefined",
    "    at new NodeError (node:internal/errors:405:5)",
    "    at Function.createRequire (node:internal/modules/cjs/loader:1375:11)",
    "    at Object.<anonymous> (/var/task/index.js:40:38)",
    "    at Module._compile (node:internal/modules/cjs/loader:1256:14)",
    "    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)",
    "    at Module.load (node:internal/modules/cjs/loader:1119:32)",
    "    at Module._load (node:internal/modules/cjs/loader:960:12)",
    "    at Module.require (node:internal/modules/cjs/loader:1143:19)",
    "    at require (node:internal/modules/cjs/helpers:119:18)",
    "    at _tryRequireFile (file:///var/runtime/index.mjs:1002:37)"
  ]
}
```
