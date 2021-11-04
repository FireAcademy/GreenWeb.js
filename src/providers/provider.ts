import { HeaderBlock } from "../types/header_block";
import { CoinState, PuzzleSolutionResponse } from "../types/wallet_protocol";

export type Optional<T> = T | null;

export type getBalanceArgs = {
    address?: string,
    puzzleHash?: string,
    minHeight?: number
};

export type subscribeToPuzzleHashUpdatesArgs = {
    puzzleHash: string,
    callback: { (coin_states: CoinState[]): void; },
    minHeight?: number
};

export type subscribeToCoinUpdatesArgs = {
    coinId: string,
    callback: { (coin_states: CoinState[]): void; },
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

export interface Provider {
    initialize(): Promise<void>;
    close(): Promise<void>;
    getNetworkId(): string;

    getBlockNumber(): Promise<Optional<number>>;
    getBalance(args: getBalanceArgs): Promise<Optional<number>>;

    subscribeToPuzzleHashUpdates(args: subscribeToPuzzleHashUpdatesArgs): void;
    subscribeToCoinUpdates(args: subscribeToCoinUpdatesArgs): void;

    getPuzzleSolution(args: getPuzzleSolutionArgs): Promise<Optional<PuzzleSolutionResponse>>;
    getCoinChildren(args: getCoinChildrenArgs): Promise<CoinState[]>;

    getBlockHeader(args: getBlockHeaderArgs): Promise<Optional<HeaderBlock>>;
    getBlocksHeaders(args: getBlocksHeadersArgs): Promise<Optional<HeaderBlock[]>>;
}