const express = require('express');
const gethistory = express.Router();
const Transaction = require('../models/userTransactions')
gethistory
    .route('/')
    .post(getdetails)


async function getdetails(req, res) {
    try {
        const { userid, newdate } = req.body;
        if(!newdate) return res.status(404).json({
            message:"All fields required"
        })
        const providedDateTime = new Date(newdate);
        const startOfDay = new Date(providedDateTime);
        startOfDay.setUTCHours(0, 0, 0, 0);
        const endOfDay = new Date(providedDateTime);
        endOfDay.setUTCHours(23, 59, 59, 999);
        console.log("Start of the day:", startOfDay.toISOString());
        console.log("End of the day:", endOfDay.toISOString());


        const results = await Transaction.find({
            userid:userid,
            createdAt: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        }).sort({createdAt:-1})
       return res.status(200).json({
        data:results
       })
    } catch (error) {
        console.log(error.message)
        return res.status(404).json({
            data: 'error at server'
        })
    }

}

module.exports = gethistory;