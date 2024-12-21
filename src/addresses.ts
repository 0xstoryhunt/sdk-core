import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains'

type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  v3CoreFactoryAddress: string
  multicallAddress: string
  quoterAddress: string
  v3MigratorAddress?: string
  nonfungiblePositionManagerAddress?: string
  tickLensAddress?: string
  swapRouter02Address?: string
  mixedRouteQuoterV1Address?: string
  mixedRouteQuoterV2Address?: string

  // v4
  v4PoolManagerAddress?: string
  v4PositionManagerAddress?: string
  v4StateView?: string
  v4QuoterAddress?: string
}

export const DEFAULT_NETWORKS = [ChainId.ODYSSEY]

export const V2_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.ODYSSEY]: '0x4773d28a8488eaB17907324455C8F8D9ea48A921'
}
export const V2_ROUTER_ADDRESSES: AddressMap = {
  [ChainId.ODYSSEY]: '0x144C047f7Be22EAB4BF78c77C1038b86923693CD'
}

// Networks that share most of the same addresses i.e. Odyssey
const DEFAULT_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x2344C1448E528dD0e4094c92966A7f68f45aa4e4',
  multicallAddress: '0x532FB9e7bf3030194Fcd72d42184e51281D59DeB',
  quoterAddress: '0x73F7a3D6A58F52aa0D7B7281E2F2975cAa96B081',
  //@:TODO: Add the correct address
  v3MigratorAddress: '0xA5644E29708357803b5A882D272c41cC0dF92B34',
  nonfungiblePositionManagerAddress: '0x858463Aa07756946c0E0B8e632BE4281f8E53cA4',
}

const ODYSSEY_ADDRESSES: ChainAddresses = DEFAULT_ADDRESSES

export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.ODYSSEY]: ODYSSEY_ADDRESSES
}

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress
    return memo
  }, {}),
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress
    }
    return memo
  }, {}),
}

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress
    return memo
  }, {}),
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress
    return memo
  }, {}),
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress
    }
    return memo
  }, {}),
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress
    }
    return memo
  }, {}),
}

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
  const mixedRouteQuoterV1Address = CHAIN_TO_ADDRESSES_MAP[chainId].mixedRouteQuoterV1Address
  if (mixedRouteQuoterV1Address) {
    memo[chainId] = mixedRouteQuoterV1Address
  }
  return memo
}, {})

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  if (SUPPORTED_CHAINS.includes(chainId)) {
    const id = chainId as SupportedChainsType
    return CHAIN_TO_ADDRESSES_MAP[id].swapRouter02Address
  }
  return ''
}
