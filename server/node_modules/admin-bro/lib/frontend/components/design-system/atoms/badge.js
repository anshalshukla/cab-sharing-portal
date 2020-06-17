"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Badge = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _cssClass = require("../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const variantStyle = (variantColor, props) => ({
  bg: variantColor,
  borderColor: variantColor,
  color: props.outline ? variantColor : 'white'
});

const colorVariant = props => (0, _styledSystem.variant)({
  variants: {
    primary: variantStyle('primary100', props),
    danger: variantStyle('error', props),
    success: variantStyle('success', props),
    info: variantStyle('info', props),
    secondary: variantStyle('accent', props)
  }
});

const sizeVariants = (0, _styledSystem.variant)({
  prop: 'size',
  variants: {
    sm: {
      py: 'xs'
    },
    lg: {
      py: 'default',
      px: '10px'
    }
  }
});
/**
 * Component representing a badge.
 *
 * Usage
 * ```javascript
 * import { Badge, BadgeProps } from 'admin-bro'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @example <caption>Color variants</caption>
 * const variants = ['primary', 'danger', 'success', 'info', 'secondary']
 * return (
 * <Box py="lg">
 *   <Badge mb="default" mr="default">default</Badge>
 *   {variants.map(variant => (
 *     <Badge mb="default" variant={variant} mr="default">{variant}</Badge>
 *   ))}
 * </Box>
 * )
 * @example <caption>Outline badges</caption>
 * const variants = ['primary', 'danger', 'success', 'info', 'secondary']
 * return (
 * <Box py="lg">
 *   <Badge mb="default" mr="default" outline>default</Badge>
 *   {variants.map(variant => (
 *     <Badge mb="default" variant={variant} mr="default" outline>{variant}</Badge>
 *   ))}
 * </Box>
 * )
 * @example <caption>Different sizes</caption>
 * return (
 * <Box py="lg">
 *   <Badge ml="default" variant="primary" size="sm">small</Badge>
 *   <Badge ml="default" variant="primary">regular</Badge>
 *   <Badge ml="default" variant="primary" size="lg">large</Badge>
 * </Box>
 * )
 */

const Badge = _styledComponents.default.span.withConfig({
  displayName: "badge__Badge",
  componentId: "sc-1soge6a-0"
})(["border-radius:12px;border:1px solid ", ";color:", ";vertical-align:middle;font-family:", ";", ";", ";", ";", ";", ";", ""], ({
  theme
}) => theme.colors.grey40, ({
  outline,
  theme
}) => outline ? theme.colors.grey60 : theme.colors.white, ({
  theme
}) => theme.font, _styledSystem.space, _styledSystem.color, _styledSystem.typography, props => colorVariant(props), sizeVariants, ({
  outline
}) => outline ? 'background: transparent;' : '');

exports.Badge = Badge;
Badge.defaultProps = {
  px: 'default',
  py: '6px',
  fontSize: 'xs',
  bg: 'grey40',
  className: (0, _cssClass.cssClass)('Badge')
};
var _default = Badge;
exports.default = _default;