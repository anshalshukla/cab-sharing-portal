"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Label = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _cssClass = require("../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Styled form of <label> element.
 *
 * Usage:
 * ```javascript
 * import { Label, LabelProps } from 'admin-bro'
 * ```
 * @component
 * @subcategory Atoms
 * @example <caption>2 Different versions</caption>
 * return (
 * <Box p="xl">
 *   <Text>
 *     <Label uppercase>Some uppercase label</Label>
 *   </Text>
 *   <Text mt="default">
 *     <Label required>Label for required field</Label>
 *   </Text>
 * </Box>
 * )
 */
const Label = _styledComponents.default.label.withConfig({
  displayName: "label__Label",
  componentId: "sc-17sbdx9-0"
})(["display:", ";font-family:", ";font-size:", ";line-height:", ";margin-bottom:", ";&:before{content:\"", "\";color:", ";margin-right:", ";display:", ";}", " ", ";", ";", ";", ""], ({
  inline
}) => inline ? 'inline-block' : 'block', ({
  theme
}) => theme.font, ({
  theme
}) => theme.fontSizes.sm, ({
  theme
}) => theme.lineHeights.default, ({
  theme,
  inline
}) => inline ? '0' : theme.space.default, ({
  required
}) => required ? '*' : '', ({
  theme
}) => theme.colors.primary100, ({
  theme
}) => theme.space.sm, ({
  required
}) => required ? 'block-inline' : 'none', ({
  uppercase
}) => uppercase ? 'text-transform: uppercase;' : '', _styledSystem.color, _styledSystem.typography, _styledSystem.space, ({
  disabled,
  theme
}) => disabled ? `color: ${theme.colors.grey40};` : '');

exports.Label = Label;
Label.defaultProps = {
  className: (0, _cssClass.cssClass)('Label')
};
var _default = Label;
exports.default = _default;