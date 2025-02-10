import { ChainId } from '../chains'
import { Token } from './token'

/**
 * Known WIP9 implementation addresses, used in our implementation of IP#wrapped
 */
export const WIP9: { [chainId: number]: Token } = {
  [ChainId.STORY]: new Token(ChainId.STORY, `${ChainId.STORY}000000000000000000000000000000000000`, 18, 'WIP', 'Wrapped IP'),
  [ChainId.ODYSSEY]: new Token(ChainId.ODYSSEY, `${ChainId.ODYSSEY}000000000000000000000000000000000000`, 18, 'WIP', 'Wrapped IP'),
  [ChainId.AENEID]: new Token(ChainId.AENEID, `${ChainId.AENEID}000000000000000000000000000000000000`, 18, 'WIP', 'Wrapped IP')
}
