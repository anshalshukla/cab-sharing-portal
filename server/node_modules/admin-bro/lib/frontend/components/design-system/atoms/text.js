"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Text = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _cssClass = require("../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const variants = (0, _styledSystem.variant)({
  variants: {
    xs: {
      fontSize: 'xs'
    },
    sm: {
      fontSize: 'sm'
    },
    lg: {
      fontSize: 'lg'
    }
  }
});
/**
 * Prop Types of a Text component.
 * Apart from variant it extends all {@link ColorProps}, {@link SpaceProps} and
 * {@link TypographyProps}
 *
 * @memberof Text
 * @alias TextProps
 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
 *                          and {@link TypographyProps}
 */

/**
 * Use the Text component to control font size, weight, alignment, and color.
 * By default it is rendered as a `div` but you can change this to other (like `span`)
 * by using `as` prop,
 *
 * Usage:
 * ```javascript
 * import { Text, TextProps } from 'admin-bro'
 * ```
 * @component
 * @subcategory Atoms
 * @example <caption>Lorem ipsum</caption>
 * return (
 * <Box>
 *   <Text>
 *    In publishing and graphic design,
 *    Lorem ipsum is a <b>placeholder</b> text commonly used to demonstrate the
 *    visual form of a document or a typeface without relying on meaningful
 *    content.
 *   </Text>
 *   <Text mt="default" variant="sm">This text was from Wikipedia</Text>
 * </Box>
 * )
 */
const Text = _styledComponents.default.div.withConfig({
  displayName: "text__Text",
  componentId: "njgcdt-0"
})(["font-family:", ";margin:0;padding:0;& b,& strong{font-weight:bold;}", ";", ";", ";", ";", ";"], ({
  theme
}) => theme.font, _styledSystem.typography, _styledSystem.space, _styledSystem.layout, _styledSystem.color, variants);

exports.Text = Text;
Text.defaultProps = {
  lineHeight: 'lg',
  fontSize: 'default',
  fontWeight: 'normal',
  className: (0, _cssClass.cssClass)('Text')
};
var _default = Text;
exports.default = _default;