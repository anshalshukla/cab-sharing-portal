"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DrawerFooter = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @component
 * @private
 */
const DrawerFooter = _styledComponents.default.section.withConfig({
  displayName: "drawer-footer__DrawerFooter",
  componentId: "sc-3rx7tf-0"
})(["padding:", " ", ";text-align:center;flex-shrink:0;", ";"], ({
  theme
}) => theme.space.xxl, ({
  theme
}) => theme.space.lg, _styledSystem.space);

exports.DrawerFooter = DrawerFooter;
var _default = DrawerFooter;
exports.default = _default;