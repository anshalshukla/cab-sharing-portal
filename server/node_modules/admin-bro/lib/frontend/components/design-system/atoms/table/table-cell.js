"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _tableHead = _interopRequireDefault(require("./table-head"));

var _cssClass = require("../../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @component
 * @private
 */
const TableCell = _styledComponents.default.td.withConfig({
  displayName: "table-cell__TableCell",
  componentId: "sc-6zc8qa-0"
})(["border-bottom:1px solid ", ";font-size:", ";line-height:", ";", ";", ";", ";", " &{color:", ";border:none;}"], ({
  theme
}) => theme.colors.grey20, ({
  theme
}) => theme.fontSizes.default, ({
  theme
}) => theme.lineHeights.default, _styledSystem.color, _styledSystem.space, _styledSystem.layout, _tableHead.default, ({
  theme
}) => theme.colors.grey60);

TableCell.defaultProps = {
  p: 'lg',
  color: 'grey100',
  className: (0, _cssClass.cssClass)('TableCell')
};
var _default = TableCell;
exports.default = _default;