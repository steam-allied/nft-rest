import db from "../../database/models"
import { Op } from "sequelize"

const newSwap = async (req, res) => {
    try {
        var meta = req.body.meta;
        
        const response = await db.swaps.create({
            metadata: JSON.stringify(meta),
            status: 1,
            init_address: meta.init.address,
            accept_address: meta.accept.address
        })
        if (response) {
            res.json({
                success: true,
                message: "new_swap",
                data: response
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: "***new_swap error"
        })
    }
}

const updateSwapStatus = async (req, res) => {
    try {
        const response = await db.swaps.update(
            { status: req.body.status },
            { where: { id: req.body.id } }
        )
        if (response) {
            res.json({
                success: true,
                message: "update_swap_status",
                data: response
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: `***update_swap_status error`
        })
    }
}

const getPending = async (req, res) => {
    try {
        const response = await db.swaps.findAll({
            where: {
                [Op.and]: {
                    status: 1,
                    [Op.or]: [
                        { accept_address: req.query.address },
                        { init_address: req.query.address }
                    ]
                }
            }
        })
        if (response) {
            res.json({
                success: true,
                message: "get_pending",
                data: response
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: `***get_pending error`
        })
    }
}

const history = async (req, res) => {
    try {
        const response = await db.swaps.findAll({
            //attributes: ["createdAt", "status"],
            where: {
                [Op.or]: [
                    { accept_address: req.query.address },
                    { init_address: req.query.address }
                ]
            }
        })
        if (response) {
            res.json({
                success: true,
                message: "history",
                data: response
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: `***history error`
        })
    }
}

const sendSign = async (req, res) => {
    try {
        const response = await db.swaps.update(
            { init_sign: req.body.sign },
            { where: { init_address: req.body.address } }
        )
        if (response) {
            res.json({
                success: true,
                message: "send_sign",
                data: response
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: `***send_sign error`
        })
    }
}

export const swapController = {
    updateSwapStatus,
    newSwap,
    getPending,
    history,
    sendSign
}
