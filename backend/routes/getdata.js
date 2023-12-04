const express = require('express');
const Transaction = require('../models/userTransactions')
const getdata = express.Router();
const mongoose=require('mongoose')
getdata
    .route('/')
    .post(getvalues);

async function getvalues(req, res) {
    try {
        const { id } = req.body;
        const debitedAmount = await Transaction.aggregate([
            {
                $match: {
                    userid: new mongoose.Types.ObjectId(id),
                    type: false,
                    isAdded: true,
                },
            },
            {
                $group: {
                    _id: null,
                    totalAmount: { $sum: '$amount' },
                },
            },
        ]);
        const creditedAmount=await Transaction.aggregate([
            {
                $match: {
                    userid: new mongoose.Types.ObjectId(id),
                    type: true,
                    isAdded: true,
                },
            },
            {
                $group: {
                    _id: null,
                    totalAmount: { $sum: '$amount' },
                },
            },
        ]);
        const totalAmount=await Transaction.aggregate([
            {
                $match: {
                    userid: new mongoose.Types.ObjectId(id),
                    isAdded: true,
                },
            },
            {
                $group: {
                    _id: null,
                    totalAmount: { $sum: '$amount' },
                },
            },
        ]);
        let finalCredited=creditedAmount.length>0?creditedAmount[0].totalAmount:0;
        let finalDebited=debitedAmount.length>0?debitedAmount[0].totalAmount:0;
        let finalTotal=totalAmount.length>0?totalAmount[0].totalAmount:0;
        console.log(finalCredited,finalDebited,finalTotal)
        return res.status(200).json({
            finalCredited,finalDebited,finalTotal
        })

    } catch (error) {
        console.log(error.message)
        res.status(404).json({
            data: 'error at server'
        })
    }
}


module.exports = {
    gettransactions: async (req, res) => {
        try {
            const { userid } = req.body;
            if (!userid) return res.status(404).json({
                message: "Please login first"
            })
            const response = await Transaction.find({ userid }).sort({ createdAt: -1 });
            return res.status(200).json({
                data: response
            })
        } catch (error) {
            return res.status(404).json({
                message: 'something went wrong'
            })
        }
    },
    getdata
}