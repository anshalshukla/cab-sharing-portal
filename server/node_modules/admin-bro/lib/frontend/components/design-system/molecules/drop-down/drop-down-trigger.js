"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DropDownTrigger = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @component
 * @private
 */
const DropDownTrigger = _styledComponents.default.span.withConfig({
  displayName: "drop-down-trigger__DropDownTrigger",
  componentId: "m5q3wa-0"
})(["display:inline-block;", ";"], _styledSystem.space);

exports.DropDownTrigger = DropDownTrigger;
DropDownTrigger.displayName = 'DropDownTrigger';
var _default = DropDownTrigger;
exports.default = _default;