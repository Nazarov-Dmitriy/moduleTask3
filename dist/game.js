"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.readGameSaving = readGameSaving;
exports.writeGameSaving = writeGameSaving;

require("core-js/modules/es.object.define-property.js");

var _domain = _interopRequireDefault(require("./domain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      console.log('game started');
    }
  }]);

  return Game;
}();

var GameSavingData = /*#__PURE__*/_createClass(function GameSavingData() {
  _classCallCheck(this, GameSavingData);
});

function readGameSaving() {}

function writeGameSaving() {}

var _default = Game;
exports["default"] = _default;