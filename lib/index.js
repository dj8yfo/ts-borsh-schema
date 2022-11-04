"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum = exports.Struct = exports.PublicKeyBE = void 0;
var web3_1 = require("@velas/web3");
var PublicKeyBE = /** @class */ (function () {
    function PublicKeyBE(fields) {
        this.value = fields.value;
        var copy = new Uint8Array(fields.value);
        this.solPubKey = new web3_1.PublicKey(copy);
    }
    PublicKeyBE.prototype.fromPubKey = function (arg) {
        this.solPubKey = arg;
        var copy = new Uint8Array(Uint8Array.from(arg.toBuffer()));
        this.value = copy;
        return this;
    };
    PublicKeyBE.prototype.equals = function (publicKey) {
        return this.solPubKey.equals(publicKey.solPubKey);
    };
    return PublicKeyBE;
}());
exports.PublicKeyBE = PublicKeyBE;
var Struct = /** @class */ (function () {
    function Struct(properties) {
        var _this = this;
        Object.keys(properties).map(function (key) {
            _this[key] = properties[key];
        });
    }
    return Struct;
}());
exports.Struct = Struct;
var Enum = /** @class */ (function () {
    function Enum(properties) {
        var _this = this;
        if (Object.keys(properties).length !== 1) {
            throw new Error('Enum can only take single value');
        }
        Object.keys(properties).map(function (key) {
            _this[key] = properties[key];
            _this.enum = key;
        });
    }
    return Enum;
}());
exports.Enum = Enum;
