"use strict";
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMinterMessageComposer = void 0;
const tx_1 = require("cosmjs-types/cosmwasm/wasm/v1/tx");
const encoding_1 = require("@cosmjs/encoding");
class BaseMinterMessageComposer {
    constructor(sender, contractAddress) {
        this.mint = ({ tokenUri }, funds) => {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: tx_1.MsgExecuteContract.fromPartial({
                    sender: this.sender,
                    contract: this.contractAddress,
                    msg: (0, encoding_1.toUtf8)(JSON.stringify({
                        mint: {
                            token_uri: tokenUri
                        }
                    })),
                    funds
                })
            };
        };
        this.updateStartTradingTime = (funds) => {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: tx_1.MsgExecuteContract.fromPartial({
                    sender: this.sender,
                    contract: this.contractAddress,
                    msg: (0, encoding_1.toUtf8)(JSON.stringify({
                        update_start_trading_time: {}
                    })),
                    funds
                })
            };
        };
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.mint = this.mint.bind(this);
        this.updateStartTradingTime = this.updateStartTradingTime.bind(this);
    }
}
exports.BaseMinterMessageComposer = BaseMinterMessageComposer;