"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Link = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _cssClass = require("../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sizeVariants = (0, _styledSystem.variant)({
  prop: 'size',
  variants: {
    sm: {
      fontSize: 'xs',
      py: 'sm'
    },
    lg: {
      fontSize: 'default'
    }
  }
});
const variants = (0, _styledSystem.variant)({
  variants: {
    primary: {
      color: 'primary100',
      '&:hover': {
        color: 'hoverBg',
        '& svg': {
          fill: 'hoverBg'
        }
      },
      '& svg': {
        fill: 'primary100'
      }
    },
    danger: {
      color: 'error',
      '&:hover': {
        color: 'error'
      },
      '& svg': {
        fill: 'error'
      }
    },
    success: {
      color: 'success',
      '&:hover': {
        color: 'success'
      },
      '& svg': {
        fill: 'success'
      }
    },
    info: {
      color: 'primary60',
      '&:hover': {
        color: 'hoverBg'
      },
      '& svg': {
        fill: 'primary60'
      }
    },
    secondary: {
      color: 'accent',
      '&:hover': {
        color: 'hoverBg'
      },
      '& svg': {
        fill: 'accent'
      }
    }
  }
});
/**
 * Prop Types of a Link component.
 * Apart from those explicitly specified below it extends all {@link ColorProps},
 * and {@link SpaceProps}
 *
 * @memberof Link
 * @alias LinkProps
 * @property {string} [...] All props default to _a_ html component like `href`,
 *                          `onClick` etc.
 * @property {string} [...] Other props from {@link ColorProps} and {@link SpaceProps}
 */

/**
 * Styled form of Link element.
 *
 * Usage:
 * ```javascript
 * import { Link, LinkProps } from 'admin-bro'
 * ```
 * @component
 * @subcategory Atoms
 * @example <caption>All color variants</caption>
 * const variants = ['primary', 'danger', 'success', 'info', 'secondary']
 * return (
 * <Box py="xl">
 *   {variants.map(variant => (
 *      <Link href="#" variant={variant} mr="xl">{variant}</Link>
 *   ))}
 * </Box>
 * )
 * @example <caption>With icons</caption>
 * return (
 * <Box py="xl">
 *   <Link href="#" mr="xl">
 *     <Icon icon="Add" />
 *     With an icon
 *   </Link>
 * </Box>
 * )
 */
const Link = _styledComponents.default.a.withConfig({
  displayName: "link__Link",
  componentId: "sc-1uq0k19-0"
})(["font-family:", ";vertical-align:middle;cursor:pointer;text-decoration:none;&:hover{text-decoration:underline;}& svg{padding-right:", ";vertical-align:text-top;}", " ", ";", ";", ";", ";"], ({
  theme
}) => theme.font, ({
  theme
}) => theme.space.default, ({
  uppercase
}) => uppercase ? 'text-transform: uppercase;' : '', _styledSystem.color, _styledSystem.space, sizeVariants, variants);

exports.Link = Link;
Link.defaultProps = {
  color: 'grey60',
  className: (0, _cssClass.cssClass)('Link')
};
var _default = Link;
exports.default = _default;