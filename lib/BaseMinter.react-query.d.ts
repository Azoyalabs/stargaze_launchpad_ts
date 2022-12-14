/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.16.5.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Coin, ConfigResponse, StatusResponse } from "./BaseMinter.types";
import { BaseMinterQueryClient, BaseMinterClient } from "./BaseMinter.client";
export declare const baseMinterQueryKeys: {
    contract: readonly [{
        readonly contract: "baseMinter";
    }];
    address: (contractAddress: string | undefined) => readonly [{
        readonly address: string | undefined;
        readonly contract: "baseMinter";
    }];
    config: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "config";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "baseMinter";
    }];
    status: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "status";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "baseMinter";
    }];
};
export interface BaseMinterReactQuery<TResponse, TData = TResponse> {
    client: BaseMinterQueryClient | undefined;
    options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
}
export interface BaseMinterStatusQuery<TData> extends BaseMinterReactQuery<StatusResponse, TData> {
}
export declare function useBaseMinterStatusQuery<TData = StatusResponse>({ client, options, }: BaseMinterStatusQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface BaseMinterConfigQuery<TData> extends BaseMinterReactQuery<ConfigResponse, TData> {
}
export declare function useBaseMinterConfigQuery<TData = ConfigResponse>({ client, options, }: BaseMinterConfigQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface BaseMinterUpdateStartTradingTimeMutation {
    client: BaseMinterClient;
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useBaseMinterUpdateStartTradingTimeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BaseMinterUpdateStartTradingTimeMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, BaseMinterUpdateStartTradingTimeMutation, unknown>;
export interface BaseMinterMintMutation {
    client: BaseMinterClient;
    msg: {
        tokenUri: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useBaseMinterMintMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BaseMinterMintMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, BaseMinterMintMutation, unknown>;
