"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var plantsRout_1 = require("./handlers/plantsRout");
var router = express_1.default.Router();
/* GET 1- show  plant route. */
router.use('/show-plants', plantsRout_1.showPlants);
/* GET 2-delete plant route. */
//show msg Main router Connect
router.get('/', function (req, res) {
    res.send('Main router Connect!');
});
exports.default = router;
