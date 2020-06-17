"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = exports.ButtonCSS = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _focusShadow = _interopRequireDefault(require("../utils/focus-shadow.style"));

var _cssClass = require("../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const variantShared = {
  color: 'white',
  'border-color': 'transparent',
  [`& .${(0, _cssClass.cssClass)('Icon')} svg`]: {
    fill: 'white'
  },
  '&:disabled': {
    bg: 'grey40'
  }
};
const buttonVariants = (0, _styledSystem.variant)({
  variants: {
    primary: {
      bg: 'primary100',
      '&:hover': {
        bg: 'hoverBg'
      },
      className: (0, _cssClass.cssClass)(['Button', 'Button_Primary']),
      ...variantShared
    },
    danger: {
      bg: 'error',
      '&:hover': {
        bg: 'errorDark'
      },
      className: (0, _cssClass.cssClass)(['Button', 'Button_Danger']),
      ...variantShared
    },
    success: {
      bg: 'success',
      '&:hover': {
        bg: 'successDark'
      },
      className: (0, _cssClass.cssClass)(['Button', 'Button_Success']),
      ...variantShared
    },
    info: {
      bg: 'info',
      '&:hover': {
        bg: 'infoDark'
      },
      className: (0, _cssClass.cssClass)(['Button', 'Button_Info']),
      ...variantShared
    },
    secondary: {
      bg: 'accent',
      className: (0, _cssClass.cssClass)(['Button', 'Button_Secondary']),
      ...variantShared
    },
    text: {
      bg: 'transparent',
      borderColor: 'transparent',
      '&:disabled': {
        'border-color': 'transparent'
      },
      '&:hover': {
        background: 'transparent',
        color: 'hoverBg',
        'border-color': 'transparent',
        'text-decoration': 'underline'
      },
      '&:focus': {
        background: 'transparent',
        'border-color': 'transparent'
      },
      '& svg': {
        fill: 'primary100'
      },
      '&:hover svg': {
        fill: 'hoverBg'
      },
      className: (0, _cssClass.cssClass)(['Button', 'Button_Text'])
    }
  }
});
const sizeVariants = (0, _styledSystem.variant)({
  prop: 'size',
  variants: {
    sm: {
      fontSize: 'default',
      py: 'sm',
      px: 'xxl',
      [`& .${(0, _cssClass.cssClass)('Icon')}`]: {
        paddingRight: 'sm'
      }
    },
    lg: {
      py: 'default',
      lineHeight: 'lg'
    },
    icon: {
      py: 'default',
      px: 'default',
      lineHeight: 'sm',
      minWidth: '34px',
      height: '34px',
      [`& .${(0, _cssClass.cssClass)('Icon')}`]: {
        padding: 0
      }
    }
  }
});
/**
 * Prop Types of an Button component.
 * Apart from those defined below it extends all {@link ColorProps}, {@link SpaceProps}
 * and {@link TypographyProps}
 *
 * @memberof Button
 * @alias ButtonProps
 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
 *                          and {@link TypographyProps}
 */

/**
 * Button CSS Styles which can be reused in another button-like component with styled-components
 *
 * Usage:
 * ```
 * import { ButtonCSS } from 'admin-bro'
 * import { Link } from 'react-router-dom'
 *
 * const MyStyledLink = styled(Link)`
 *   ${ButtonCSS}
 * `
 * ```
 * @memberof Button
 * @alias ButtonCSS
 */
const ButtonCSS = (0, _styledComponents.css)(["outline:0;display:inline-block;font-family:", ";line-height:", ";border:1px solid ", ";color:", ";cursor:pointer;text-decoration:none;padding:", " ", ";box-sizing:border-box;& > .", "{padding-bottom:2px;vertical-align:middle;padding-right:", ";}& .", " svg{width:16px;height:16px;fill:", ";}&:hover{color:", ";background:", ";border-color:", ";& .", " svg{fill:", ";}}&:focus{border-color:", ";", ";}&:disabled{color:", ";border-color:", ";background:", ";cursor:default;& .", " svg{fill:", ";}}", ";", ";", ";", ";", ";", ";"], ({
  theme
}) => theme.font, ({
  theme
}) => theme.lineHeights.lg, ({
  theme
}) => theme.colors.primary100, ({
  theme
}) => theme.colors.primary100, ({
  theme
}) => theme.space.default, ({
  theme
}) => theme.space.x3, (0, _cssClass.cssClass)('Icon'), ({
  theme
}) => theme.space.default, (0, _cssClass.cssClass)('Icon'), ({
  theme
}) => theme.colors.primary100, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.hoverBg, ({
  theme
}) => theme.colors.hoverBg, (0, _cssClass.cssClass)('Icon'), ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.accent, ({
  theme
}) => `box-shadow: ${(0, _focusShadow.default)(theme)}`, ({
  theme
}) => theme.colors.grey60, ({
  theme
}) => theme.colors.grey80, ({
  theme
}) => theme.colors.white, (0, _cssClass.cssClass)('Icon'), ({
  theme
}) => theme.colors.grey60, ({
  rounded
}) => rounded ? 'border-radius: 9999px' : '', _styledSystem.color, _styledSystem.space, _styledSystem.typography, buttonVariants, sizeVariants);
/**
 * Buttons make common actions immediately visible and easy to perform with one click or tap.
 * They can be used for any type of action.
 *
 * * Usage
 * ```javascript
 * import { Button, ButtonCSS, ButtonProps } from 'admin-bro'
 * ```
 * @component
 * @subcategory Atoms
 * @example <caption>Color variants</caption>
 * const variants = ['primary', 'danger', 'success', 'info', 'secondary', 'text']
 * return (
 * <Box py="lg">
 *   <Button mb="default" mr="default">default</Button>
 *   {variants.map(variant => (
 *     <Button mb="default" variant={variant} mr="default">{variant}</Button>
 *   ))}
 * </Box>
 * )
 * @example <caption>Size variants</caption>
 * return (
 * <Box py="lg">
 *   <Button size="sm">Small</Button>
 *   <Button ml="default">Regular size</Button>
 *   <Button size="lg" ml="default">Large</Button>
 * </Box>
 * )
 * @example <caption>Icons</caption>
 * return (
 * <Box py="lg">
 *  <Button mr="default">
 *    <Icon icon="Settings" />
 *    With icon
 *  </Button>
 *  <Button size="icon" mr="default"><Icon icon="Settings" /></Button>
 *  <Button rounded size="icon" mr="default"><Icon icon="Settings" /></Button>
 *  <Button variant="danger" mr="default">
 *    <Icon icon="Delete" />
 *    Delete me
 *  </Button>
 *  <Button mr="default" variant="text" size="sm">
 *    <Icon icon="Add" />
 *    Create new item
 *  </Button>
 * </Box>
 * )
 * @example <caption>State</caption>
 * return (
 * <Box py="lg">
 *   <Button disabled>Disabled</Button>
 *   <Button ml="default" variant="primary" disabled>Disabled</Button>
 * </Box>
 * )
 *
 */

exports.ButtonCSS = ButtonCSS;

const Button = _styledComponents.default.button.withConfig({
  displayName: "button__Button",
  componentId: "sc-3bpuam-0"
})(["", ""], ButtonCSS);

exports.Button = Button;
Button.defaultProps = {
  fontSize: 'default',
  bg: 'transparent',
  className: (0, _cssClass.cssClass)('Button')
};
var _default = Button;
exports.default = _default;