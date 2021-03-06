"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewUser = void 0;
//register New user route
var express_1 = __importDefault(require("express"));
var users_1 = require("../../models/users");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//import { plants, plantsList } from '../../models/plants'
// set up route
exports.NewUser = express_1.default.Router();
exports.NewUser.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getUserData, userIntity, existUser, newUser, token, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                return [4 /*yield*/, req.body];
            case 1:
                getUserData = _a.sent();
                console.log("new user is loging ".concat(getUserData.username));
                if (!(getUserData.firstName == null ||
                    getUserData.lastName == null ||
                    getUserData.username == null ||
                    getUserData.email == null ||
                    getUserData.password == null)) return [3 /*break*/, 2];
                res.status(400);
                res.json('All input is required');
                return [3 /*break*/, 6];
            case 2:
                userIntity = new users_1.UserIntity();
                return [4 /*yield*/, userIntity.FindUserByEmailandUsername(getUserData.email, getUserData.username)
                    // @ts-ignore
                ];
            case 3:
                existUser = _a.sent();
                if (!(existUser.length > 0)) return [3 /*break*/, 4];
                // @ts-ignore
                console.log("return row [".concat(existUser.length, "]"));
                res.status(400);
                res.json('User Already Exist. Please Login');
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, userIntity.CreatUser(getUserData)
                //creat jwt and return it to user
                // @ts-ignore
            ];
            case 5:
                newUser = _a.sent();
                token = jsonwebtoken_1.default.sign({ user: newUser.username, email: newUser.email }, process.env.TOKEN_SECRET);
                //save user token
                // @ts-ignore
                newUser.token = token;
                //return new user token
                // @ts-ignore
                res.status(201).json(newUser.token);
                _a.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                err_1 = _a.sent();
                res.status(400);
                res.json(err_1);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); });
