import { getAlchemy } from "../../utils/alchemy.js";

function test(req, res) {
    res.send({network: process.env.NETWORK});
}

/// returns all the nfts owned by a wallet address
async function list_all_wallet_nfts(req, res) {
    var alchemy = getAlchemy();
    // Print all NFTs returned in the response:
    var nfts = await alchemy.nft.getNftsForOwner(req.params.walletId);
    res.send(nfts.ownedNfts);
}

///register a new wallet account in the system
async function register_a_wallet(req, res) {
    //
}

export const nftController = { test, list_all_wallet_nfts, register_a_wallet };