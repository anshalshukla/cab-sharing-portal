"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DrawerContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @component
 * @private
 */
const DrawerContent = _styledComponents.default.section.withConfig({
  displayName: "drawer-content__DrawerContent",
  componentId: "sc-1j25263-0"
})(["flex-grow:1;overflow:auto;padding:", " ", " ", ";box-sizing:border-box;", ";"], ({
  theme
}) => theme.space.x3, ({
  theme
}) => theme.space.xxl, ({
  theme
}) => theme.space.xl, _styledSystem.space);

exports.DrawerContent = DrawerContent;
var _default = DrawerContent;
exports.default = _default;