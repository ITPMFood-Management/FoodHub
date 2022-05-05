const router = require("exprees").Router();
const {getAllProdusts , getProductById} = require("../controllers/products");



router.route("/").get(getAllProdusts);
router.route("/:id").get(getProductById);

module.exports = router;