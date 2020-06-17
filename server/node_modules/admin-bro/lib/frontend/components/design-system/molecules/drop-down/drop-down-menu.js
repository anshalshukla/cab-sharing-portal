"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DropDownMenu = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _box = _interopRequireDefault(require("../../atoms/box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @component
 * @private
 */
const DropDownMenu = (0, _styledComponents.default)(_box.default).withConfig({
  displayName: "drop-down-menu__DropDownMenu",
  componentId: "sc-1a9dmxr-0"
})(["background:", ";display:inline-block;position:absolute;z-index:40;right:0;top:24px;box-shadow:", ";min-width:200px;", ";", ";"], ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.shadows.card, ({
  isVisible
}) => isVisible ? '' : 'display: none;', _styledSystem.position);
exports.DropDownMenu = DropDownMenu;
DropDownMenu.displayName = 'DropDownMenu';
var _default = DropDownMenu;
exports.default = _default;