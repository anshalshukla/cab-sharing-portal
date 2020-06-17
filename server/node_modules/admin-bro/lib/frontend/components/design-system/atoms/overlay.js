"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Overlay = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _box = _interopRequireDefault(require("./box"));

var _cssClass = require("../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Overlay = (0, _styledComponents.default)(_box.default).withConfig({
  displayName: "overlay__Overlay",
  componentId: "z9dpgi-0"
})([""]);
exports.Overlay = Overlay;
Overlay.defaultProps = {
  width: '100%',
  height: '100%',
  bg: 'grey100',
  opacity: 0.2,
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 40,
  className: (0, _cssClass.cssClass)('Overlay')
};
var _default = Overlay;
exports.default = _default;