"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Loader = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _box = require("./box");

var _cssClass = require("../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
const Spinner = _styledComponents.default.div.attrs({
  className: 'lds-facebook'
}).withConfig({
  displayName: "loader__Spinner",
  componentId: "g7821c-0"
})(["&{display:inline-block;position:relative;width:64px;height:64px;}& div{display:inline-block;position:absolute;left:6px;width:13px;background:", ";animation:lds-facebook 1.2s cubic-bezier(0,0.5,0.5,1) infinite;}& div:nth-child(1){left:6px;animation-delay:-0.24s;}& div:nth-child(2){left:26px;animation-delay:-0.12s;}& div:nth-child(3){left:45px;animation-delay:0;}@keyframes lds-facebook{0%{top:6px;height:51px;}50%,100%{top:19px;height:26px;}}"], ({
  theme
}) => theme.colors.primary100);
/**
 * Simple loader
 *
 * @component
 * @subcategory Atoms
 * @example
 * return (
 *   <Loader/>
 * )
 */


const Loader = () => _react.default.createElement(_box.Box, {
  p: "x3",
  style: {
    textAlign: 'center'
  },
  "data-testid": "Loader",
  className: (0, _cssClass.cssClass)('Loader')
}, _react.default.createElement(Spinner, null, _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null)));

exports.Loader = Loader;
var _default = Loader;
exports.default = _default;