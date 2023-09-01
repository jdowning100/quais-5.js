"use strict";
import { BaseContract, Contract, ContractFactory } from "@quais/contracts";
import { BigNumber, FixedNumber } from "@quais/bignumber";
import { Signer, VoidSigner } from "@quais/abstract-signer";
import { Wallet } from "@quais/wallet";
import * as constants from "@quais/constants";
import * as providers from "@quais/providers";
import { getDefaultProvider } from "@quais/providers";
import { Wordlist, wordlists } from "@quais/wordlists";
import * as utils from "./utils";
import { ErrorCode as errors, Logger } from "@quais/logger";
////////////////////////
// Compile-Time Constants
// This is generated by "npm run dist"
import { version } from "./_version";
const logger = new Logger(version);
////////////////////////
// Exports
export { Signer, Wallet, VoidSigner, getDefaultProvider, providers, BaseContract, Contract, ContractFactory, BigNumber, FixedNumber, constants, errors, logger, utils, wordlists, 
////////////////////////
// Compile-Time Constants
version, Wordlist };
//# sourceMappingURL=quais.js.map