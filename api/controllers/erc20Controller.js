import { getAlchemy } from "../../utils/alchemy.js"

const list_all_erc20_tokens = async (req, res) => {
    const alchemy = getAlchemy()
    console.log(req)
    try {
        const tkns = await alchemy.core.getTokenMetadata(req.body.address)
        res.send(tkns)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
}

export default { list_all_erc20_tokens }
