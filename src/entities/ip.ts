import invariant from 'tiny-invariant'
import { Currency } from './currency'
import { NativeCurrency } from './nativeCurrency'
import { Token } from './token'
import { WIP9 } from './wip9'

/**
 * IP is the main usage of a 'native' currency, i.e. for Story mainnet and all testnets
 */
export class IP extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'IP', 'IP')
  }

  public get wrapped(): Token {
    const wip9 = WIP9[this.chainId]
    invariant(!!wip9, 'WRAPPED')
    return wip9
  }

  private static _IPCache: { [chainId: number]: IP } = {}

  public static onChain(chainId: number): IP {
    return this._IPCache[chainId] ?? (this._IPCache[chainId] = new IP(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
