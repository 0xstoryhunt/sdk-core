import { Token } from './token'

/**
 * Known WIP9 implementation addresses, used in our implementation of IP#wrapped
 */
export const WIP9: { [chainId: number]: Token } = {
  1516: new Token(1516, '0x1516000000000000000000000000000000000000', 18, 'WIP', 'Wrapped IP'),
}
