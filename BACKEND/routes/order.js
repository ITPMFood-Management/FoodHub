const router = require("express").Router();
const Order = require("../models/order")

router.route("/create").post(async (req, res) => {
    const { name, email, address } = req.body;

    const phoneNumber = Number(req.body.phoneNumber)

    const newOrder = new Order({
        name,
        email,
        address,
        phoneNumber
    })

    await newOrder.save().then(() => res.status(200).json({ success: true, message: "Successfully added the delivery" })).catch(err => res.status(500).json({ success: false, err }))
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

    const { name, email, address } = req.body;
 
    const age = Number(req.body.age)
    const phoneNumber = Number(req.body.phoneNumber)

    await Order.findByIdAndUpdate(id, { name, email, address, age, phoneNumber }).then(() => res.status(200).json({ success: true, message: "Successfully updated the delivery" }).catch(err => res.json(err)))
})

router.route("/delete/:id").delete(async (req, res) => {
    const { id } = req.params;

    await Order.findByIdAndDelete(id).then(() => res.status(200).json({ success: true, message: "Successfully delted the delivey" })).catch(err => res.json({ err }))
})

module.exports = router;