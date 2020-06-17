"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _polished = require("polished");

var _default = theme => {
  const rgb = (0, _polished.parseToRgb)(theme.colors.accent);
  const color = `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, .58)`;
  return `0 1px 4px 0 ${color};`;
};

exports.default = _default;