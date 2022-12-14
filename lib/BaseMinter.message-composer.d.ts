/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { Coin } from "./BaseMinter.types";
export interface BaseMinterMessage {
    contractAddress: string;
    sender: string;
    mint: ({ tokenUri }: {
        tokenUri: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateStartTradingTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class BaseMinterMessageComposer implements BaseMinterMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    mint: ({ tokenUri }: {
        tokenUri: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateStartTradingTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
