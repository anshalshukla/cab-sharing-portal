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
const TableRow = _styledComponents.default.tr.withConfig({
  displayName: "table-row__TableRow",
  componentId: "sc-1bdcf55-0"
})(["&:hover{background:", ";}"], ({
  theme
}) => theme.colors.grey20);

TableRow.defaultProps = {
  className: (0, _cssClass.cssClass)('TableRow')
};
var _default = TableRow;
exports.default = _default;