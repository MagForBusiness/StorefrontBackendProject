"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
var verifyAuthToken = function (req, res, next) {
    try {
        //Get Token Befor proceed
        var authorizationHeader = req.headers.authorization;
        // @ts-ignore
        var token = authorizationHeader.split(' ')[1];
        var decoded = jsonwebtoken_1.default.verify(token, String(process.env.TOKEN_SECRET));
        console.log("Access Accept ");
        next();
    }
    catch (err) {
        res.status(401);
        res.json('Access denied, invalid token');
    }
};
exports.default = verifyAuthToken;
