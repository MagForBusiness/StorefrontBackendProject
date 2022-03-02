"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var plantsRout_1 = require("./handlers/plantsRout");
var singupRout_1 = require("./handlers/singupRout");
var signinRoute_1 = require("./handlers/signinRoute");
var router = express_1.default.Router();
/* GET 1- show  plant route. */
router.use('/show-plants', plantsRout_1.showPlants);
/* GET 2-delete plant route. */
// get register (NewUser) route
router.use('/signup', singupRout_1.NewUser);
// get Login (NewUser) route
router.use('/signin', signinRoute_1.LoginUser);
//show msg Main router Connect
router.get('/', function (req, res) {
    res.send('Main router Connect!');
});
exports.default = router;
