export enum ChainId {
  ODYSSEY = 1516,
}

export const SUPPORTED_CHAINS = [
  ChainId.ODYSSEY,
] as const
export type SupportedChainsType = (typeof SUPPORTED_CHAINS)[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  IP = 'IP',
}
