import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains'
import DEFAULT_ADDRESS_LIST from '@storyhunt/default-list/build/storyhunt-default.constantlist.json';

type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  v3CoreFactoryAddress: string
  multicallAddress: string
  quoterAddress: string
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
  [ChainId.ODYSSEY]: '0x...'
}
export const V2_ROUTER_ADDRESSES: AddressMap = {
  [ChainId.ODYSSEY]: '0x...'
}

// Networks that share most of the same addresses i.e. Odyssey
const DEFAULT_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: DEFAULT_ADDRESS_LIST.constants[ChainId.ODYSSEY].V3_FACTORY_CONTRACT.address,
  multicallAddress: DEFAULT_ADDRESS_LIST.constants[ChainId.ODYSSEY].MULTICALL2_ADDRESS.address,
  quoterAddress: DEFAULT_ADDRESS_LIST.constants[ChainId.ODYSSEY].QUOTERV2_ADDRESS.address,
  nonfungiblePositionManagerAddress: DEFAULT_ADDRESS_LIST.constants[ChainId.ODYSSEY].NFT_POSITION_MANAGER_ADDRESS.address
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
  }, {})
}

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress
    return memo
  }, {})
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress
    return memo
  }, {})
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress
    }
    return memo
  }, {})
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress
    }
    return memo
  }, {})
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
