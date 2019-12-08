# vuex-domain-typescript-nuxt
vuex-module-decoratorsを利用したシンプルなカウンタです。
VuexにClean Architectureでいうユースケース層を集め、.vueファイルは薄く書くという方針の一例です。

Vueの場合厳密なカプセル化が難しいですが、Linterがエラーをはいてくれるので、その気になればVuexをDomainとしたデザインも可能ではないかと思います。



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
