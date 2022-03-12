"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var usersRoute_1 = require("./handlers/usersRoute");
var singupRout_1 = require("./handlers/singupRout");
var signinRoute_1 = require("./handlers/signinRoute");
var verifyAuthToken_1 = __importDefault(require("../middleware/verifyAuthToken"));
var ProductRouts_1 = require("./handlers/ProductRouts");
var dashboardRouts_1 = require("./handlers/dashboardRouts");
var OrderRouts_1 = require("./handlers/OrderRouts");
var router = express_1.default.Router();
/* GET  user index route. */
router.use('/user-index', verifyAuthToken_1.default, usersRoute_1.IndexUser);
/* GET  user show route. */
router.use('/user', verifyAuthToken_1.default, usersRoute_1.ShowUser);
// get user register (NewUser) route
router.use('/signup', singupRout_1.NewUser);
// get Login (NewUser) route
router.use('/signin', signinRoute_1.LoginUser);
//Products
/* GET  products index route. */
router.use('/products-index', ProductRouts_1.ProductRout);
/* GET  products show route. */
router.use('/product', ProductRouts_1.Productshow);
/* GET  Creat New product  route. */
router.use('/add-product', verifyAuthToken_1.default, ProductRouts_1.NewProduct);
//orders
/* GET  order show route. */
router.use('/orders', OrderRouts_1.ordershow);
/* GET  order index route. */
router.use('/orders-index', OrderRouts_1.OrderRout);
/* GET  order index route. */
router.use('/NewOrder', OrderRouts_1.NewOrder);
/* GET  order delete route. */
router.use('/deletOrder', OrderRouts_1.deletOrder);
/* get productsInActiveOrderby user id */
router.use('/ActiveorderbyuserId', verifyAuthToken_1.default, dashboardRouts_1.productsInActiveOrder);
//show msg Main router Connect
router.get('/', function (req, res) {
    res.send('Main router Connect!');
});
exports.default = router;
