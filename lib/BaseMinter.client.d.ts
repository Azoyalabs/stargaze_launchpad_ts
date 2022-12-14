/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { ConfigResponse, Coin, StatusResponse } from "./BaseMinter.types";
export interface BaseMinterReadOnlyInterface {
    contractAddress: string;
    config: () => Promise<ConfigResponse>;
    status: () => Promise<StatusResponse>;
}
export declare class BaseMinterQueryClient implements BaseMinterReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    config: () => Promise<ConfigResponse>;
    status: () => Promise<StatusResponse>;
}
export interface BaseMinterInterface extends BaseMinterReadOnlyInterface {
    contractAddress: string;
    sender: string;
    mint: ({ tokenUri }: {
        tokenUri: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateStartTradingTime: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class BaseMinterClient extends BaseMinterQueryClient implements BaseMinterInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    mint: ({ tokenUri }: {
        tokenUri: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateStartTradingTime: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
