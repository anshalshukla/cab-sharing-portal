"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DesignSystem = () => _react.default.createElement("p", null, "design system");

var _default = (0, _styledComponents.withTheme)(DesignSystem);

exports.default = _default;