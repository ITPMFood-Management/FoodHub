const router = require("express").Router();
const Order = require("../models/order")
// const multer = require('multer');
// let path = require('path');
// const { v4: uuidv4 } = require('uuid');

router.route("/create").post(async (req, res) => {

    const { customername,category,itemnumber,address } = req.body;

    const phoneNumber = Number(req.body.phoneNumber)
    const quantity = Number(req.body.quantity)
    const newOrder = new Order({
        customername,
        category,
        address,
        itemnumber,
        quantity,
        phoneNumber
    })

    await newOrder.save().then(() => res.status(200).json({ success: true, message: "Successfully Added the Order" })).catch(err => res.status(500).json({ success: false, err }))
})

router.route("/").get(async (req, res) => {
    await Order.find().then((Orders) => res.status(200).json(Orders)).catch(err => res.json({ success: false, err }))
})

router.route("/get/:id").get(async (req, res) => {
    const { id } = req.params;

    await Order.findById(id).then((Order) => res.status(200).json(Order)).catch(err => res.json({ err }))
})

router.route("/update/:id").put(async (req, res) => {
    const { id } = req.params;

    const { customername, address, category, itemnumber } = req.body;
 
    const phoneNumber = Number(req.body.phoneNumber)
    const quantity = Number(req.body.quantity)

    await Order.findByIdAndUpdate({_id:id}, { customername, phoneNumber , address , category,  itemnumber  , quantity }).then(() => res.status(200).json({ success: true, message: "Successfully updated the Order" }).catch(err => res.json(err)))
})

router.route("/delete/:id").delete(async (req, res) => {
    const { id } = req.params;

    await Order.findByIdAndDelete(id).then(() => res.status(200).json({ success: true, message: "Successfully deleted the Order" })).catch(err => res.json({ err }))
})

module.exports = router;