const router = require('express').Router();

const { register , login } = require("../controllers/admin");
 
//bellow routes map the controllers
router.route("/register").post(register); // call the auth in controllers

router.route("/login").post(login);

module.exports = router;
