"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var index_1 = __importDefault(require("./routes/index"));
//Create  application object with express()
var app = (0, express_1.default)();
var address = '0.0.0.0:3000';
var corsOptions = {
    origin: 'http://some3ddomian.com',
    optionsSuccessStatus: 200,
};
//cors
app.use((0, cors_1.default)(corsOptions));
// app.get ('/test-cors' , cors(corsOptions) , (req: express.Request, res: express.Response,next) => {
//      res.json ({msg:`cors with the middle ware`);
//      next();
// })
// ;
//Routs map
app.use(body_parser_1.default.json());
app.use('/', index_1.default);
app.listen(3000, function () {
    console.log("server started at localhost:".concat(address));
});