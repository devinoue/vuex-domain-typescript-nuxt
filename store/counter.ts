import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ stateFactory: true, namespaced: true, name: 'counter' })
export default class Counter extends VuexModule {
  private _count: number = 0

  @Mutation
  public addNumber(): void {
    this._count++
  }

  @Mutation
  public subtractNumber(): void {
    this._count--
  }

  get totalCount(): number {
    return this._count
  }
}
