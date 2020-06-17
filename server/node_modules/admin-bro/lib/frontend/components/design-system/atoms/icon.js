"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var CarbonIcons = _interopRequireWildcard(require("@carbon/icons-react"));

var _cssClass = require("../utils/css-class");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const spinCss = (0, _styledComponents.css)(["@keyframes iconSpin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}animation-name:iconSpin;animation-duration:1000ms;animation-iteration-count:infinite;animation-timing-function:linear;"]);

const Wrapper = _styledComponents.default.span.withConfig({
  displayName: "icon__Wrapper",
  componentId: "sc-1votnx1-0"
})(["vertical-align:middle;display:inline-block;line-height:", ";font-size:", ";& > svg{", ";", ";}", ";", ";", ";"], ({
  theme
}) => theme.lineHeights.sm, ({
  theme
}) => theme.fontSizes.sm, ({
  theme,
  color: colorProp
}) => colorProp ? `fill: ${theme.colors[colorProp]}` : '', ({
  spin
}) => spin ? spinCss : '', ({
  rounded
}) => rounded ? 'border-radius: 9999px;' : '', _styledSystem.space, _styledSystem.color);
/**
 * Component wrapping [@carbon/icons-react](https://www.npmjs.com/package/@carbon/icons-react).
 * List of all icons can be found here: https://www.carbondesignsystem.com/guidelines/icons/library/
 * but keys are not always 1 to 1 in a relation to the `icons-react` library.
 * If you have problem verifying the key of given icon - you can always open the
 * Chrome Terminal (with AdminBro open) and write there:
 *
 * ```
 * Object.keys(CarbonIcons)
 * ```
 *
 * to see list of all possible icon keys.
 *
 *
 *
 * @component
 * @subcategory Atoms
 * @example <caption>Icons inside other elements</caption>
 * return (
 *   <Box variant="grey">
 *     <Label mb="default"><Icon icon="Accessibility" />Icon in Label</Label>
 *     <Button><Icon icon="Accessibility" />Icon in button</Button>
 *   </Box>
 * )
 * @example <caption>Different sizes</caption>
 * const sizes = [16, 20, 24, 32]
 * return (
 *   <Box variant="grey">
 *     {sizes.map(size => (
 *       <Label m="default"><Icon icon="Accessibility" size={size}/>Icon {size}</Label>
 *     ))}
 *   </Box>
 * )
 *
 * @example <caption>Big rounded icon with background</caption>
 * return (
 *   <Box variant="grey">
 *     <Icon icon="Add" color="white" bg="primary100" rounded size={32} p="default"/>
 *   </Box>
 * )
 */


const Icon = props => {
  const {
    icon,
    size,
    color: givenColor,
    ...other
  } = props;
  const iconSize = size || 16;
  const CarbonIcon = CarbonIcons[`${icon}${iconSize}`] || CarbonIcons.ErrorOutline16;

  if (CarbonIcon) {
    return _react.default.createElement(Wrapper, _extends({
      className: (0, _cssClass.cssClass)('Icon'),
      color: givenColor || 'grey100'
    }, other), _react.default.createElement(CarbonIcon, null));
  }

  return null;
};

exports.Icon = Icon;
var _default = Icon;
exports.default = _default;