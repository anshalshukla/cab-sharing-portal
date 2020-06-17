"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextArea = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _input = require("./input");

var _cssClass = require("../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wrapped `textarea` html element.
 *
 * Usage:
 * ```javascript
 * import { TextArea, TextAreaProps } from 'admin-bro'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @example
 * return (
 *   <Box p="xl">
 *      <Label htmlFor="textarea1">Some example label</Label>
 *      <TextArea id="textarea1" width={1/2} />
 *   </Box>
 * )
 */
const TextArea = _styledComponents.default.textarea.withConfig({
  displayName: "text-area__TextArea",
  componentId: "r7fig8-0"
})(["", " ", ";", ";", ";"], _input.InputCSS, _styledSystem.space, _styledSystem.layout, _styledSystem.typography);

exports.TextArea = TextArea;
TextArea.defaultProps = {
  px: 'default',
  py: 'default',
  fontSize: 'lg',
  className: (0, _cssClass.cssClass)('TextArea')
};
var _default = TextArea;
exports.default = _default;