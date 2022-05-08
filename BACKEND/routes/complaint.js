const router = require("express").Router();
const Complaint = require("../models/complaint")

router.route("/create").post(async (req, res) => {

    const { ctype,description,email } = req.body;

    const newComplaint = new Complaint({
        ctype,
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

    await Complaint.findById(id).then((Complaint) => res.status(200).json(Complaint)).catch(err => res.json({ err }))
})

router.route("/update/:id").put(async (req, res) => {
    const { id } = req.params;

    const { ctype ,description ,email } = req.body;
 

    await Complaint.findByIdAndUpdate(id, { ctype,description,email }).then(() => res.status(200).json({ success: true, message: "Successfully updated the Complaint" }).catch(err => res.json(err)))
})

router.route("/delete/:id").delete(async (req, res) => {
    const { id } = req.params;

    await Complaint.findByIdAndDelete(id).then(() => res.status(200).json({ success: true, message: "Successfully deleted the Complaint" })).catch(err => res.json({ err }))
})

module.exports = router;