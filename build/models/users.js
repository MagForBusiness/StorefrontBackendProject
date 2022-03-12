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
exports.UserIntity = void 0;
// @ts-ignore
var database_1 = __importDefault(require("../database"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, BCRYPT_PASSWORD = _a.BCRYPT_PASSWORD, SALT_ROUNDS = _a.SALT_ROUNDS;
var UserIntity = /** @class */ (function () {
    function UserIntity() {
    }
    UserIntity.prototype.CreatUser = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, hash, result, users, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        sql = 'INSERT INTO users (firstName, lastName, username, email,userpassword) VALUES($1, $2, $3, $4, $5) RETURNING *';
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        hash = bcrypt_1.default.hashSync(u.userpassword + String(BCRYPT_PASSWORD), parseInt(String(SALT_ROUNDS)));
                        return [4 /*yield*/, conn.query(sql, [u.firstName, u.lastName, u.username, u.email, hash])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        users = result.rows[0];
                        console.log(result.rows);
                        return [2 /*return*/, users];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("Cannont get users table ".concat(error_1));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserIntity.prototype.authenticate = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'SELECT userpassword FROM users WHERE username=($1)';
                        return [4 /*yield*/, conn.query(sql, [username])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        // console.log(password+BCRYPT_PASSWORD)
                        if (result.rows.length) {
                            users = result.rows[0];
                            console.log(users);
                            if (bcrypt_1.default.compareSync(password + BCRYPT_PASSWORD, users.userpassword)) {
                                return [2 /*return*/, users];
                            }
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    UserIntity.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'SELECT * FROM users';
                        return [4 /*yield*/, conn.query(sql)];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        err_1 = _a.sent();
                        throw new Error("unable get users: ".concat(err_1));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserIntity.prototype.show = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        sql = 'SELECT * FROM users WHERE user_id =($1)';
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_2 = _a.sent();
                        throw new Error("unable show user ".concat(id, ": ").concat(err_2));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserIntity.prototype.FindUserByEmailandUsername = function (email, username) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        sql = 'SELECT * FROM users where email = ($1) or username =($2)';
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(sql, [email, username])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error("Cannont get users table ".concat(error_2));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserIntity.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, result, newusers, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        sql = 'DELETE FROM users  WHERE user_id=($1)';
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        newusers = result.rows[0];
                        return [2 /*return*/, newusers];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error("Cannont get users table for creat ".concat(error_3));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // this function used to testing purpose
    UserIntity.prototype.resetuserIdSequences = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, result, newuser, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        sql = 'ALTER SEQUENCE users_user_id_seq  RESTART;';
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(sql)];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        newuser = result.rows[0];
                        return [2 /*return*/, newuser];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error("Cannont resetSequences users_user_id_seq ".concat(error_4));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UserIntity;
}());
exports.UserIntity = UserIntity;
