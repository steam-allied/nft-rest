import sql from "mssql"

const db = await sql.connect(process.env.CONNECT)

const NewSwap = async (req, res) => {
    try {
        await db.query`INSERT INTO swaps (metadata,status,init_address,accept_address) VALUES(${
            req.body.meta
        },${1},${req.body.i_address},${req.body.a_address})`
        res.sendStatus(200)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
}

const update = async (req, res) => {
    try {
        await db.query`UPDATE swaps SET status=${req.body.status} WHERE metadata=${req.body.meta}`
        res.sendStatus(200)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
}

export default { update, NewSwap }
