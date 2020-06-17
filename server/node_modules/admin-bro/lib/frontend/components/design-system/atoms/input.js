"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Input = exports.InputCSS = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _focusShadow = _interopRequireDefault(require("../utils/focus-shadow.style"));

var _cssClass = require("../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Input CSS Styles which can be reused in another input component with styled-components
 *
 * Usage:
 * ```
 * import { InputCSS } from 'admin-bro'
 *
 * const MyStyledInput = styled.input`
 *   ${InputCSS}
 * `
 * ```
 * @memberof Input
 * @alias InputCSS
 */
const InputCSS = (0, _styledComponents.css)(["box-sizing:border-box;color:", ";background:transparent;border:1px solid ", ";font-size:", ";line-height:", ";font-family:", ";outline:none;&:hover{border-color:", ";}&:focus{border-color:", ";", ";}&:disabled{color:", ";}"], ({
  theme
}) => theme.colors.grey80, ({
  theme
}) => theme.colors.inputBorder, ({
  theme
}) => theme.fontSizes.default, ({
  theme
}) => theme.lineHeights.lg, ({
  theme
}) => theme.font, ({
  theme
}) => theme.colors.grey60, ({
  theme
}) => theme.colors.primary100, ({
  theme
}) => `box-shadow: ${(0, _focusShadow.default)(theme)}`, ({
  theme
}) => theme.colors.grey40);
/**
 * Prop Types of an Input component.
 * Apart from variant it extends all {@link LayoutProps} and {@link SpaceProps}
 *
 * @memberof Input
 * @alias InputProps
 * @property {string} [...] Other props from {@link LayoutProps}, {@link SpaceProps}
 */

exports.InputCSS = InputCSS;

/**
 * Wrapped `input` html element.
 *
 * Usage:
 * ```javascript
 * import { Input, InputProps, InputCSS } from 'admin-bro'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @example
 * return (
 *   <Box p="xl">
 *      <Label htmlFor="input1">Some example label</Label>
 *      <Input id="input1" width={1/2} />
 *   </Box>
 * )
 */
const Input = _styledComponents.default.input.withConfig({
  displayName: "input__Input",
  componentId: "sc-19lylr8-0"
})(["", ";", ";", ";"], InputCSS, _styledSystem.space, _styledSystem.layout);

exports.Input = Input;
Input.defaultProps = {
  px: 'default',
  py: 'sm',
  className: (0, _cssClass.cssClass)('Input')
};
var _default = Input;
exports.default = _default;