---
title: ReactJS
author: Keik@
date: '2021-08-22'
slug: []
categories:
  - ReactJS
tags: []
description: ''
toc: true
---

## Configurando o ambiente

```
yarn init -y
yarn add react
yarn add react-dom
```

### [1] Configurando o Babel

```
yarn add @babel/core @babel/cli @babel/preset-env -D
```

:floppy_disk: babel.config.js

```
module.exports = {
    presets: [
        '@babel/preset-env'
    ]
}
```

p/ compilar na mão:
```
yarn babel src/index.js --out-file dist/bundle.js 
```
p/ o babel entender o react

```
yarn add @babel/preset-react -D

```

:floppy_disk: webpack.config.js
```
'@babel/preset-react'
```

### [2] Configurando o Webpack

```
yarn add webpack webpack-cli webpack-dev-server -D
yarn add babel-loader -D
```
:floppy_disk: webpack.config.js

```
const path = require('path')
module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    }
};

```
p/ rodar
```
yarn webpack
```

### [3] Estrutura do React

no :floppy_disk: babel.config.js 

p/ não precisar importar o react

```

[ '@babel/preset-react', {
           runtime: 'automatic'
       }],
```

###  [4] Servindo html estático
p/ injetar o bundle automaticamente.

```
yarn add html-webpack-plugin -D
```

no :floppy_disk: webpack.config.js


```
const HtmlWebpackPlugin = require('html-webpack-plugin')

. . . 


    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    
```

### [5] Webpack DevServer
-> Conf do Dev Server p/ ele criar o bundle automaticamente

```
yarn add webpack-dev-server -D

yarn add webpack-dev-server@3.11.1
```

no :floppy_disk: webpack.config.js

```
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
```    
 
### [6] Source maps

Forma de conseguir visualizar o código original mesmo quando todo o código tá embaralhado.

no :floppy_disk: webpack.config.js

```
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
```


### [7] Ambiente dev e produção

no :floppy_disk: webpack.config.js

```
const isDevelopment = process.env.NODE_ENV !== 'production';

. . . 

    mode: isDevelopment ? 'development' : 'production',
    
```

"cross-env": para definir variáveis ambiente independente do SO.


```
yarn add cross-env -D
```

e os scripts p/ os 2 casos 

```
 "scripts": {
    "dev": "webpack serve",
    "build": "cross-env NODE_ENV=production webpack"
  },
```

### [8]Importando arquivos CSS + SASS loader

os modulos para a conversão

```
yarn add style-loader css-loader node-sass sass-loader -D
```

```

  {
                test: /\.scss$/ ,
                exclude: /node_modules/,
                use: ['style-loader','css-loader','sass-loader'],
            }
 ```           
           

### [9] Fast Refresh no Webpack


: padrão: reseta estados. 

 ``` 
yarn add @pmmmwh/react-refresh-webpack-plugin react-refresh -D
 ``` 
 
no :floppy_disk: webpack.config.js
 (só faz sentido em desenvolvimento) 


 ``` 
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


...

isDevelopment && new ReactRefreshWebpackPlugin(),

...
# -> *ps :: para resolver o false no caso do "não desenvolvimento"


    ].filter(Boolean),

... 
# -> no devServer
   hot: true,

... 
no babel-loader:

       use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean
 ``` 
 
 
### [10] Typescript 


  ``` 
  yarn add typescript -D
  
  yarn tsc --init 

  ``` 
  
no :floppy_disk: tsconfig.json

``` 
[15]  "lib": [ " DOM" , "DOM.Iterable", "ESNext"],          

[40]  "allowJs": true,       

[70]  "allowSyntheticDefaultImports": true,                          

[29]   "moduleResolution": "node",  

[36]   "resolveJsonModule": true,  

[69] "isolatedModules": true,  

[52] "noEmit": true,

[17] "jsx":"react-jsx",
``` 

REMOVER:
```
"target": "es5",
"module": "commonjs",   
```

-> ADD
```
  "include": ["src"]
```

p/ o BABEL entender o typescript

```
yarn add @babel/preset-typescript -D
```


:floppy_disk: babel.config.js

```
'@babel/preset-typescript',
```

no :floppy_disk: webpack.config.js

```
test: /\. (j|t)sx$/,

...   
extensions: ['.js', '.jsx', '.ts', '.tsx'],

...   
 entry: path.resolve(__dirname, 'src', 'index.tsx'),
``` 

os types iniciais:


```
yarn add @types/react-dom -D
yarn add @types/react -D
```

## Lembrete

atalhos vscode::
control + shift + L  :  seleciona todas as ocorrencias  [ + END -- vai pra linha toda ] 
