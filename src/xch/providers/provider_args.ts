import { BigNumberish } from "@ethersproject/bignumber";
import { CoinState } from "./provider_types";

export type getBalanceArgs = {
    address?: string,
    puzzleHash?: string,
    minHeight?: number
};

export type subscribeToPuzzleHashUpdatesArgs = {
    puzzleHash: string,
    callback: (coin_states: CoinState[]) => void,
    minHeight?: number
};

export type subscribeToCoinUpdatesArgs = {
    coinId: string,
    callback: (coin_states: CoinState[]) => void,
    minHeight?: number
};

export type getPuzzleSolutionArgs = {
    coinId: string,
    height: number
};

export type getCoinChildrenArgs = {
    coinId: string
};

export type getBlockHeaderArgs = {
    height: number
};

export type getBlocksHeadersArgs = {
    startHeight: number,
    endHeight: number
};

export type getCoinRemovalsArgs = {
    height: number,
    headerHash: string,
    coinIds?: string[]
};

export type getCoinAdditionsArgs = {
    height: number,
    headerHash: string, // apparently not optional...
    puzzleHashes?: string[]
};

export type transferArgs = {
    to: string,
    value: BigNumberish,
    fee?: BigNumberish
};

export type transferCATArgs = {
    to: string,
    assetId: string,
    value: BigNumberish,
    fee?: BigNumberish
};

export type acceptOfferArgs = {
    offer: string,
    fee?: BigNumberish
};

export type subscribeToAddressChangesArgs = {
    callback: (address: string) => void,
};
