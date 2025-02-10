export enum ChainId {
  STORY = 1513,
  ODYSSEY = 1516,
  AENEID = 1315
}

export const SUPPORTED_CHAINS = [ChainId.STORY, ChainId.ODYSSEY, ChainId.AENEID] as const

export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  IP = 'IP'
}

export const ID_TO_CHAIN_ID = (id: number): ChainId => {
  switch (id) {
    case 1513:
      return ChainId.STORY;
    case 1516:
      return ChainId.ODYSSEY;
    case 1315:
      return ChainId.AENEID;
    default:
      throw new Error(`Unknown chain id: {id}`);
  }
};

export enum ChainName {
  STORY = 'story',
  ODYSSEY = 'odyssey',
  AENEID = 'aeneid'
}

export const ID_TO_NETWORK_NAME = (id: number): ChainName => {
  switch (id) {
    case 1513:
      return ChainName.STORY;
    case 1516:
      return ChainName.ODYSSEY;
    case 1315:
      return ChainName.AENEID;
    default:
      throw new Error(`Unknown chain id: {id}`);
  }
};

export const CHAIN_IDS_LIST = Object.values(ChainId).map((c) =>
  c.toString()
) as string[];
