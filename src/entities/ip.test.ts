import { IP } from './ip'

describe('IP', () => {
  it('static constructor uses cache', () => {
    // eslint-disable-next-line no-self-compare
    expect(IP.onChain(1516) === IP.onChain(1516)).toEqual(true)
  })
  it('caches once per chain ID', () => {
    expect(IP.onChain(1516) !== IP.onChain(2)).toEqual(true)
  })
  it('#equals returns false for diff chains', () => {
    expect(IP.onChain(1516).equals(IP.onChain(2))).toEqual(false)
  })
  it('#equals returns true for same chains', () => {
    expect(IP.onChain(1516).equals(IP.onChain(1516))).toEqual(true)
  })
})
