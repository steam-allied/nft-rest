import { getAlchemy } from "../../utils/alchemy.js"
import { filterTokens } from "../../utils/erc20Helpers.js"

const list_all_erc20_tokens = async (req, res) => {
    const alchemy = getAlchemy()
    const tkns = []
    try {
        const response = await alchemy.core.getTokenBalances(
            req.query.walletAddress,
            req.query.tknAddresses
        )
        // filterTokens(tkns, response.tokenBalances).then(() => {
        //     res.send(tkns)
        // })
        response.tokenBalances.forEach(async (tkn) => {
            if (
                tkn.tokenBalance !==
                "0x0000000000000000000000000000000000000000000000000000000000000000"
            ) {
                tkns.push(tkn.contractAddress)
            }
        })
        res.send(tkns)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
}

export default { list_all_erc20_tokens }
