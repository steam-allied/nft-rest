import db from "../../database/models"
import { Op } from "sequelize"

function test(req, res) {
    //testDb();
    res.send({network: process.env.NETWORK});
}

const newSwap = async (req, res) => {
    try {
        var metadata = req.body.metadata;
        
        const response = await db.swaps.create({
            metadata: JSON.stringify(metadata),
            status: 1,
            init_address: req.body.init_address.trim(),
            accept_address: req.body.accept_address.trim()
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

const updateSwap = async (req, res) => {
    try {
        var metadata = req.body.metadata;
        
        const response = await db.swaps.update(
        { 
            metadata: JSON.stringify(metadata),
            status: 1,
            init_address: req.body.init_address.trim(),
            accept_address: req.body.accept_address.trim() 
        },
        { where: { id: req.body.id } });

        if (response) {
            res.json({
                success: true,
                message: "update_swap",
                data: response
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: "***update_swap error"
        })
    }
}

const updateSwapStatus = async (req, res) => {
    try {
        const response = await db.swaps.update(
            { status: req.body.status },
            { where: { id: req.body.id } }
        );


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

const getSwapDetails = async (req, res) => {
    try {
        console.log(req.query.swapId);
        const swap = await db.swaps.findByPk(req.query.swapId);
        if(swap) {
            let walletId = req.query.walletId;
            const metadata = JSON.parse(swap.metadata);
            console.log(metadata);
            if(swap.init_address !== walletId && swap.accept_address !== walletId) {
                res.status(200).json({
                    success: false,
                    message: "not authorized to view this swap"
                });
            } else {
                res.json({
                    success: true,
                    message: "getSwapDetails",
                    data: swap
                });
            }            
        } else {
            res.status(200).json({
                success: false,
                message: "swap details not found"
            });
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: `***getSwapDetails error`
        });
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
    test,
    newSwap,
    updateSwap,
    updateSwapStatus,
    getPending,
    history,
    sendSign,
    getSwapDetails
}
