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
const TableBody = _styledComponents.default.tbody.withConfig({
  displayName: "table-body__TableBody",
  componentId: "sc-1ip1gg6-0"
})([""]);

TableBody.defaultProps = {
  className: (0, _cssClass.cssClass)('TableBody')
};
var _default = TableBody;
exports.default = _default;