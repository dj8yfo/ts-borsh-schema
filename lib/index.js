"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum = exports.Struct = void 0;
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
