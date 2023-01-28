"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC1155Abi = exports.ERC721Abi = exports.ERC20Abi = void 0;
const erc20_json_1 = __importDefault(require("./erc20.json"));
exports.ERC20Abi = erc20_json_1.default;
const erc721_json_1 = __importDefault(require("./erc721.json"));
exports.ERC721Abi = erc721_json_1.default;
const erc1155_json_1 = __importDefault(require("./erc1155.json"));
exports.ERC1155Abi = erc1155_json_1.default;
