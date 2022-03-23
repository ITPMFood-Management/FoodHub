const router = require("express").Router();
const Food = require("../models/Food")

//route create

router.route("/create").post(async (req, res) => {
    const {
        Foodcode,
        Foodname,
        Foodcatergory,
        Foodstatus,
    } = req.body;
   
    const Itemprice = Number(req.body.Itemprice);
    const ExpDate   = Date(req.body.ExpDate);
    const MFDDate   = Date(req.body.MFDDate);

    //database schema
   const newFood = new Food({
       Foodcode,
       Foodname,
       Itemprice,
       Foodcatergory,
       Foodstatus,
       ExpDate,
       MFDDate
    });

   //check saveing data

   const isAvailable = await Food.findOne({
       Foodcode :{ $regex: new RegExp(Foodcode, "i") },
       Foodname: Foodname,

       
   });
   if(isAvailable) {
       return res
       .status(401)
       .json({error: "already food  please add some new food"});
   }

   await newFood
      .save()
      .then(() => res.status(200).json({success:true}))
      .catch(
        (error) => res.status(404).json({success: false, error: error}) 
    // else save the DB
      );
});
//get all data
router.route("/").get(async (req, res) => {
    await Food.find()
    .then((food) => res.json(food))
    .catch((error) => res.status(500).json({ success:false, error:error}));

    
});

//route for getting a relavant document using id
router.route("/get/:id").get(async (req, res) => {
    const { id } = req.params;

    await Food.findById(id)
    .then((foods) => res.json(foods))
    .catch((error) => res.status(500).json({success: false, error:error}));
});

//route deleting a relavant document usiing id
router.route("/delete/:id").delete(async (req, res) => {
    const { id } = req.params;

    await Food.findByIdAndRemove(id)
      .then(() => res.json({message:"Delete Successfull" }))
      .catch((error) => res.status(500).json({success : false, error: error}));
});

//router for update 
router.route("/update/:id").put(async (req, res) => {
    const{ id } = req.params;
    const{
       Foodcode,
       Foodname,
       Itemprice,
       Foodcatergory,
       Foodstatus,
       ExpDate,
       MFDDate
   } = req.body;

    await Food.findByIdAndUpdate(id, {
        Foodcode,
        Foodname,
        Itemprice,
        Foodcatergory,
        Foodstatus,
        ExpDate,
        MFDDate
 
    })
     .then(() => res.json({success: true}))
     .catch((error) => res.json({ success: false, error: error}));
});

module.exports = router;
