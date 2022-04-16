const router = require("express").Router();
const newComplaint = require("../models/complaint");
const Order = require("../models/complaint")

router.route("/create").post(async (req, res) => {

    const { complainttype,description,email } = req.body;

    const newOrder = new Order({
        complainttype,
        description,
        email
    })

    await newComplaint.save().then(() => res.status(200).json({ success: true, message: "Successfully Added the Complaint" })).catch(err => res.status(500).json({ success: false, err }))
})

router.route("/").get(async (req, res) => {
    await Complaint.find().then((Complaint) => res.status(200).json(Orders)).catch(err => res.json({ success: false, err }))
})

router.route("/get/:id").get(async (req, res) => {
    const { id } = req.params;

    await Complaint.findById(id).then((Order) => res.status(200).json(Order)).catch(err => res.json({ err }))
})

router.route("/update/:id").put(async (req, res) => {
    const { id } = req.params;

    const { customername, address, category, itemnumber } = req.body;
 
    const phoneNumber = Number(req.body.phoneNumber)
    const quantity = Number(req.body.quantity)

    await Order.findByIdAndUpdate(id, { customername, category, address,    itemnumber, phoneNumber , quantity }).then(() => res.status(200).json({ success: true, message: "Successfully updated the Order" }).catch(err => res.json(err)))
})

router.route("/delete/:id").delete(async (req, res) => {
    const { id } = req.params;

    await Order.findByIdAndDelete(id).then(() => res.status(200).json({ success: true, message: "Successfully deleted the Order" })).catch(err => res.json({ err }))
})

module.exports = router;