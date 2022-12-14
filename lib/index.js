"use strict";
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contracts = void 0;
const _0 = __importStar(require("./BaseFactory.types"));
const _1 = __importStar(require("./BaseFactory.client"));
const _2 = __importStar(require("./BaseFactory.message-composer"));
const _3 = __importStar(require("./BaseMinter.types"));
const _4 = __importStar(require("./BaseMinter.client"));
const _5 = __importStar(require("./BaseMinter.message-composer"));
const _6 = __importStar(require("./Sg721Base.types"));
const _7 = __importStar(require("./Sg721Base.client"));
const _8 = __importStar(require("./Sg721Base.message-composer"));
const _9 = __importStar(require("./Sg721MetadataOnchain.types"));
const _10 = __importStar(require("./Sg721MetadataOnchain.client"));
const _11 = __importStar(require("./Sg721MetadataOnchain.message-composer"));
const _12 = __importStar(require("./Sg721Nt.types"));
const _13 = __importStar(require("./Sg721Nt.client"));
const _14 = __importStar(require("./Sg721Nt.message-composer"));
const _15 = __importStar(require("./Splits.types"));
const _16 = __importStar(require("./Splits.client"));
const _17 = __importStar(require("./Splits.message-composer"));
const _18 = __importStar(require("./VendingFactory.types"));
const _19 = __importStar(require("./VendingFactory.client"));
const _20 = __importStar(require("./VendingFactory.message-composer"));
const _21 = __importStar(require("./VendingMinter.types"));
const _22 = __importStar(require("./VendingMinter.client"));
const _23 = __importStar(require("./VendingMinter.message-composer"));
var contracts;
(function (contracts) {
    contracts.BaseFactory = Object.assign(Object.assign(Object.assign({}, _0), _1), _2);
    contracts.BaseMinter = Object.assign(Object.assign(Object.assign({}, _3), _4), _5);
    contracts.Sg721Base = Object.assign(Object.assign(Object.assign({}, _6), _7), _8);
    contracts.Sg721MetadataOnchain = Object.assign(Object.assign(Object.assign({}, _9), _10), _11);
    contracts.Sg721Nt = Object.assign(Object.assign(Object.assign({}, _12), _13), _14);
    contracts.Splits = Object.assign(Object.assign(Object.assign({}, _15), _16), _17);
    contracts.VendingFactory = Object.assign(Object.assign(Object.assign({}, _18), _19), _20);
    contracts.VendingMinter = Object.assign(Object.assign(Object.assign({}, _21), _22), _23);
})(contracts = exports.contracts || (exports.contracts = {}));
