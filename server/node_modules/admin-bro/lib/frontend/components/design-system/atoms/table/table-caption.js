"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _button = require("../button");

var _text = require("../text");

var _cssClass = require("../../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CAPTION_HEIGHT = '42px';
/**
 * @component
 * @private
 */

const TableCaption = _styledComponents.default.caption.withConfig({
  displayName: "table-caption__TableCaption",
  componentId: "sc-1bghgra-0"
})(["font-family:", ";padding:", " ", ";text-align:left;color:", ";font-size:", ";line-height:", ";position:absolute;height:", ";left:0;right:0;top:-", ";background:", ";box-sizing:border-box;& ", "{color:", ";& > span svg{fill:", ";}&:hover{color:", ";}}& ", "{color:", ";}"], ({
  theme
}) => theme.font, ({
  theme
}) => theme.space.sm, ({
  theme
}) => theme.space.lg, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.fontSizes.default, ({
  theme
}) => theme.lineHeights.default, CAPTION_HEIGHT, CAPTION_HEIGHT, ({
  theme
}) => theme.colors.primary100, _button.Button, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.white, _text.Text, ({
  theme
}) => theme.colors.white);

TableCaption.defaultProps = {
  className: (0, _cssClass.cssClass)('TableCaption')
};
var _default = TableCaption;
exports.default = _default;