# vuex-domain-typescript-nuxt
vuex-module-decoratorsを利用したシンプルなカウンタです。
Vue/Nuxtのアーキテクチャについて検討した際、TypeScript + Vuexで内部状態を保持するのはどうだろうというアイディアが出たので、簡単に実装してみました。  

VuexにClean Architectureでいうユースケース層を集め、.vueファイルは薄く書くという方針の一例です。  

実装の利益よりもむしろ、TypeScriptのアクセス修飾子はNuxtでは正確には働かず、スルーされてトランスパイルされてしまうことが分かり、どうも厳密なカプセル化が難しいようです。ただLinterがエラーをはいてくれるので、その気になればVuexをModelとしたデザインも可能ではないかと思います。



``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
