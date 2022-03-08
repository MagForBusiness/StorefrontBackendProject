"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1.default.config();
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, ENV = _a.ENV, POSTGRES_TEST_DB = _a.POSTGRES_TEST_DB, POSTGRES_TEST_USER = _a.POSTGRES_TEST_USER, POSTGRES_TEST_PASSWORD = _a.POSTGRES_TEST_PASSWORD;
console.log(ENV);
var client = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: ENV === 'dev' ? POSTGRES_DB : POSTGRES_TEST_DB,
    user: ENV === 'dev' ? POSTGRES_USER : POSTGRES_TEST_USER,
    password: ENV === 'dev' ? POSTGRES_PASSWORD : POSTGRES_TEST_PASSWORD,
});
exports.default = client;
