const router = require("express").Router();
const Food = require("../models/Food")
const multer = require('multer');
let path = require('path');
const { v4: uuidv4 } = require('uuid');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './frontend/public/foodima');
    },
    filename: function(req, file, cb){
        cb(null, uuidv4() + '-' + new Date().toISOString().replace(/:/g, '-') + path.extname(file.originalname));
    }


});

const fileFilter = (req, file, cb) =>{
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png']
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null, true);
    }else{
        cb(null, false);
    }
}

let upload = multer({storage,fileFilter});

//route create

router.route("/create").post(upload.single('Image'),async (req, res) => {
    const {
        Foodcode,
        Foodname,
        Foodcatergory,
        Foodstatus,
    } = req.body;
   
    const Itemprice = Number(req.body.Itemprice);
    const ExpDate   = Date(req.body.ExpDate);
    const MFDDate   = Date(req.body.MFDDate);
    const Image     = req.file.filename;

    
    //database schema
   const newFood = new Food({
       Foodcode,
       Foodname,
       Itemprice,
       Foodcatergory,
       Foodstatus,
       ExpDate,
       MFDDate,
       Image
    });

   //check saveing data

   const isAvailable = await  Food.findOne({
       Foodcode :{ $regex: new RegExp(Foodcode, "i") },
       Foodname: Foodname,


   });

   if(isAvailable) {
       return res
       .status(400)
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
router.route("/update/:id").put(upload.single('image') ,async (req, res) => {
    const{ id } = req.params;
    const{
       Foodcode,
       Foodname,
       Itemprice,
       Foodcatergory,
       Foodstatus,
       ExpDate,
       MFDDate,
       Image
   } = req.body;

    await Food.findByIdAndUpdate(id, {
        Foodcode,
        Foodname,
        Itemprice,
        Foodcatergory,
        Foodstatus,
        ExpDate,
        MFDDate,
        Image
 
    })
     .then(() => res.json({success: true}))
     .catch((error) => res.json({ success: false, error: error}));
});

module.exports = router;
