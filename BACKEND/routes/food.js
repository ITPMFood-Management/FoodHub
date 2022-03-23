const express = require('express');
/*const foods = require('../models/foods');*/
const Posts   = require('../models/customer/delivery/food');

const router = express.Router();

//save posts

router.post('/post/save',(req,res)=>{

    let newPost = new Posts(req.body);

    newPost.save((err) =>{
         if(err){
             return res.status(400).json({
                 error:err
             });
         }
         return res.status(200).json({
             success:"Posts saved successfully"
         });
    
    });



});

//get post

router.get('/foods',(req,res) =>{
     Posts.find().exec((err,foods) =>{
         if(err){
             return res.status(400).json({
                 error:err
             });
         }
          return res.status(200).json({
              success:true,
              existingPosts:foods
          });
     });
});


//update post
router.put('/food/update/:id',(req,res) =>{
     Posts.findByIdAndUpdate(
         req.params.id,
         {
             $set:req.body
         },
         (err,food) =>{
             if(err){
                  return res.status(400).json({error:err});
             }
              return res.status(200).json({
                  success:"Updated Succesfully"
              });
         }
     );
         
    
});

//delete post

router.delete('/food/delete/:id',(req,res) =>{
       Posts.findByIdAndRemove(req.params.id).exec((err,deletedFood) =>{

           if(err) return res.status(400).json({
               message:"Delete unsuccesful".err
           });

            return res.json({
                message:"Delete successful",deletedFood
            });
       });

});



module.exports = router;
