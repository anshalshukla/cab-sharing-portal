"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Placeholder = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _cssClass = require("../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const linearGradient = theme => `linear-gradient(to right, ${theme.colors.grey60} 8%, ${theme.colors.grey40} 18%, ${theme.colors.grey20} 33%)`;

const StyledPlaceholder = _styledComponents.default.div.withConfig({
  displayName: "placeholder__StyledPlaceholder",
  componentId: "sc-44t4fq-0"
})(["@keyframes placeHolderShimmer{0%{background-position:-468px 0}100%{background-position:468px 0}}animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:placeHolderShimmer;animation-timing-function:linear;background:", ";background:", ";background-size:1000px 104px;height:338px;position:relative;overflow:hidden;", ";"], ({
  theme
}) => theme.colors.white, ({
  theme
}) => linearGradient(theme), _styledSystem.layout);
/**
 * Renders placeholder
 *
 * Usage:
 * ```javascript
 * import { Placeholder, PlaceholderProps } from 'admin-bro'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @example <caption>Image placeholder</caption>
 * return (
 *   <Box>
 *     <Placeholder width={100} height={200} />
 *   </Box>
 * )
 *
 * @example <caption>Text placeholder</caption>
 * return (
 *   <Box>
 *     <Label>Some name</Label>
 *     <Placeholder width={400} height={14} />
 *   </Box>
 * )
 */


const Placeholder = ({
  as: htmlAs,
  ref,
  ...other
}) => _react.default.createElement(StyledPlaceholder, _extends({
  as: htmlAs
}, other, {
  className: (0, _cssClass.cssClass)('Placeholder')
}));

exports.Placeholder = Placeholder;

/**
 * Prop Types of a Placeholder component.
 * Apart from standard html props it extends {@link LayoutProps}
 * @typedef {object} PlaceholderProps
 * @memberof Placeholder
 * @alias PlaceholderProps
 * @property {string} [...] All props default to _div_ html component like `style`,
 *                          `id` etc.
 * @property {string} [...] Props from {@link LayoutProps}
 */
var _default = Placeholder;
exports.default = _default;