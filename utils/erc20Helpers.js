import { getAlchemy } from "./alchemy.js"

export const filterTokens = async (tkns, balances) => {
    const alchemy = getAlchemy()
    balances.forEach(async (tkn) => {
        if (
            tkn.tokenBalance !==
            "0x0000000000000000000000000000000000000000000000000000000000000000"
        ) {
            const meta = await alchemy.core.getTokenMetadata(
                tkn.contractAddress
            )
            tkns.push({
                name: meta.name,
                symbol: meta.symbol,
                address: tkn.contractAddress
            })
        }
    })
}
