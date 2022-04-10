const router = require("express").Router();
const Delivery = require("../models/delivery")

router.route("/create").post(async (req, res) => {
    const { name, email, address } = req.body;
    const birthDate = Date(req.body.birthDate);
    const workDate = Date(req.body.workDate)
    const age = Number(req.body.age)
    const phoneNumber = Number(req.body.phoneNumber)

    const newDelivery = new Delivery({
        name,
        email,
        address,
        birthDate,
        workDate,
        age,
        phoneNumber
    })

    await newDelivery.save().then(() => res.status(200).json({ success: true, message: "Successfully added the delivery" })).catch(err => res.status(500).json({ success: false, err }))
})

router.route("/").get(async (req, res) => {
    await Delivery.find().then((deliveries) => res.status(200).json(deliveries)).catch(err => res.json({ success: false, err }))
})

router.route("/get/:id").get(async (req, res) => {
    const { id } = req.params;

    await Delivery.findById(id).then((delivery) => res.status(200).json(delivery)).catch(err => res.json({ err }))
})

router.route("/update/:id").put(async (req, res) => {
    const { id } = req.params;

    const { name, email, address } = req.body;
    const birthDate = Date(req.body.birthDate);
    const workDate = Date(req.body.workDate)
    const age = Number(req.body.age)
    const phoneNumber = Number(req.body.phoneNumber)

    await Delivery.findByIdAndUpdate(id, { name, email, address, birthDate, workDate, age, phoneNumber }).then(() => res.status(200).json({ success: true, message: "Successfully updated the delivery" }).catch(err => res.json(err)))
})

router.route("/delete/:id").delete(async (req, res) => {
    const { id } = req.params;

    await Delivery.findByIdAndDelete(id).then(() => res.status(200).json({ success: true, message: "Successfully delted the delivey" })).catch(err => res.json({ err }))
})

module.exports = router;