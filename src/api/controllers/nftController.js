import { getAlchemy } from "../../utils/alchemy.js";
//import { testDb } from "../models/test.js";

function test(req, res) {
    //testDb();
    res.send({network: process.env.NETWORK});
}

/// returns all the nfts owned by a wallet address
async function list_all_wallet_nfts(req, res) {
    try {
        var alchemy = getAlchemy();
        // Print all NFTs returned in the response:
        var nfts = await alchemy.nft.getNftsForOwner(req.params.walletId);
        res.send(nfts.ownedNfts);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "***list_all_wallet_nfts error"
        })
    }
    
}

///register a new wallet account in the system
async function register_a_wallet(req, res) {
    //
}

export const nftController = { test, list_all_wallet_nfts, register_a_wallet };