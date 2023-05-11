# 项目说明

## 技术

内置 Webpack + Typescript

## 过程记录

1、创建并进入 webpackTs 文件夹， 安装 webpack、typescript

```bash
mkdir webpackTs
cd webpackTs
npm init -y

npm install webpack webpack-cli --save-dev
touch webpack.config.json

npm install --save-dev typescript ts-loader
touch tsconfig.json
```

2、package.json 内容

```json
{
  "name": "webpackts",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/lodash": "^4.14.194",
    "ts-loader": "^9.4.2",
    "typescript": "^5.0.4",
    "webpack": "^5.82.1",
    "webpack-cli": "^5.1.1"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  }
}


```

3、创建以下目录结构、文件和内容

```bash
 webpackTs
  |- package.json
  |- package-lock.json
  |- tsconfig.json
  |- webpack.config.js
  |- /node_modules
  |- /dist
    |- main.js
  |- /src
    |- index.ts
```

4、webpack.config.js 内容

```js
const path = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}
```

5、tsconfig.json 内容

```bash
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "ES6",
    "target": "ES5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "sourceMap": true
  }
}
```

6、使用第三库 lodash

```bash
npm install lodash
npm install --save-dev @types/lodash


# index.ts 文件使用 lodash
import _ from 'lodash'

let res = _.padStart('Hello TypeScript!', 20, 'a')

let arr: number[] = [1, 2]

arr.map(item => item+1)
console.log(res)
console.log(arr)


# 如果想运行 index.ts 文件的输出结果，可以先打包编译，然后使用 node 运行编译后的文件
npm run build  或者 npx webpack --config webpack.config.js
node 'dist/main.js'

```

7、打包编译

```bash
npx webpack --config webpack.config.js

或者

npm run build
```

8、发包（npm）

```bash
nrm use npm
npm login
npm publish
```