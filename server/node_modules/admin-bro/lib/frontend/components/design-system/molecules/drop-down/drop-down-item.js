"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DropDownItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _link = _interopRequireDefault(require("../../atoms/link"));

var _box = _interopRequireDefault(require("../../atoms/box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @component
 * @private
 */
const DropDownItem = (0, _styledComponents.default)(_box.default).withConfig({
  displayName: "drop-down-item__DropDownItem",
  componentId: "iszfll-0"
})(["position:relative;z-index:10000;border:none;color:", ";display:block;font-family:", ";border:solid transparent;border-width:0 ", ";&:hover{border-color:", ";background:", ";}& svg{vertical-align:middle;padding-bottom:2px;padding-right:", ";fill:", ";}& a{color:", ";}", ";& > ", ",& > a{padding:", ";display:block;&:hover{text-decoration:none;}}"], ({
  theme
}) => theme.colors.grey80, ({
  theme
}) => theme.font, ({
  theme
}) => theme.space.sm, ({
  theme
}) => theme.colors.primary100, ({
  theme
}) => theme.colors.grey20, ({
  theme
}) => theme.space.default, ({
  theme
}) => theme.colors.grey40, ({
  theme
}) => theme.colors.grey80, _styledSystem.space, _link.default, ({
  theme
}) => theme.space.lg);
exports.DropDownItem = DropDownItem;
var _default = DropDownItem;
exports.default = _default;