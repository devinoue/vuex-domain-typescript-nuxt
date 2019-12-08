import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Counter from '~/store/counter'

// eslint-disable-next-line import/no-mutable-exports
let counterStore: Counter

/**
 * ストアを初期化する（型推論できるモジュールとして取得する）
 * @param store Vuex.Store
 */
function initialiseStores(store: Store<any>): void {
  // Todos を型推論できるストアモジュール化
  counterStore = getModule(Counter, store)
}

export { initialiseStores, counterStore }
