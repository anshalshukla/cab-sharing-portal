"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _cssClass = require("../../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @component
 * @private
 */
const TableHead = _styledComponents.default.thead.withConfig({
  displayName: "table-head__TableHead",
  componentId: "sc-1ek6hvp-0"
})(["background:", ";& a{color:", ";text-decoration:none;font-size:", ";white-space:nowrap;}"], ({
  theme
}) => theme.colors.grey20, ({
  theme
}) => theme.colors.grey60, ({
  theme
}) => theme.fontSizes.sm);

TableHead.defaultProps = {
  className: (0, _cssClass.cssClass)('TableHead')
};
var _default = TableHead;
exports.default = _default;