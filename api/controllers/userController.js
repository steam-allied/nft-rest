import sql from "mssql"

const db = await sql.connect(process.env.CONNECT)

const AddUser = async (req, res) => {
    try {
        await db.query`INSERT INTO users (address,timestamp) VALUES(${req.body.address},${req.body.timestamp})`
        res.sendStatus(200)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
}

const CheckUser = async (req, res) => {
    try {
        const response =
            await db.query`SELECT address FROM users where address=${req.query.address}`
        if (response.recordset.length > 0) {
            res.sendStatus(200)
        } else {
            res.sendStatus(404)
        }
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
}

export default { AddUser, CheckUser }
