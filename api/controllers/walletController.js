import { getAlchemy } from "../../utils/alchemy.js";

async function list_all_wallets(req, res) {
    var alchemy = getAlchemy();
    // Print all NFTs returned in the response:
    //var nfts = await alchemy.nft.getNftsForOwner("0x9fc7D5B258823e180595FF9E4BD07A78FA7E6f9a");
    //return nfts.ownedNfts;
    return null;
}

export const walletController = { list_all_wallets };