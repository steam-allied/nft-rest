"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nftController = void 0;
var _alchemy = require("../../utils/alchemy.js");
//import { testDb } from "../models/test.js";

function test(req, res) {
  //testDb();
  res.send({
    network: process.env.NETWORK
  });
}

/// returns all the nfts owned by a wallet address
async function list_all_wallet_nfts(req, res) {
  var alchemy = (0, _alchemy.getAlchemy)();
  // Print all NFTs returned in the response:
  var nfts = await alchemy.nft.getNftsForOwner(req.params.walletId);
  res.send(nfts.ownedNfts);
}

///register a new wallet account in the system
async function register_a_wallet(req, res) {
  //
}
const nftController = {
  test,
  list_all_wallet_nfts,
  register_a_wallet
};
exports.nftController = nftController;
//# sourceMappingURL=nftController.js.map