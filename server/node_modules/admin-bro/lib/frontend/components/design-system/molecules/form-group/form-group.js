"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormGroup = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _label = require("../../atoms/label");

var _button = require("../../atoms/button");

var _input = require("../../atoms/input");

var _link = require("../../atoms/link");

var _inputGroup = _interopRequireDefault(require("./input-group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const formGroupDisabledCSS = (0, _styledComponents.css)(["color:", ";"], ({
  theme
}) => theme.colors.grey40);
const formGroupWithErrorCSS = (0, _styledComponents.css)(["color:", ";", "{color:", ";border-color:", ";}&&& ", "{color:", ";&:before{color:", ";}}&&& ", ",&&& ", ",&&& ", "{border-color:", ";}"], ({
  theme
}) => theme.colors.error, _input.Input, ({
  theme
}) => theme.colors.error, ({
  theme
}) => theme.colors.error, _label.Label, ({
  theme
}) => theme.colors.error, ({
  theme
}) => theme.colors.error, _label.Label, _button.Button, _link.Link, ({
  theme
}) => theme.colors.error);
/**
 * Props for FormGroup. Apart from props defined here FormGroup supports also all {@link SpaceProps}
 * @alias FormGroupProps
 * @memberof FormGroup
 */

/**
 * FormGroup comes with other, from-related components like: FormMessage and InputGroup.
 * Together they allow you to build form elements.
 *
 * Usage:
 * ```javascript
 * import { FormGroup, FormGroupProps, InputGroup, FormMessage } from 'admin-bro'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @example <caption>Example 1: input with all sorts of buttons</caption>
 * return (
 * <Box py="xl">
 *   <FormGroup>
 *     <Label required>Name</Label>
 *     <InputGroup>
 *       <Button variant="primary" size="icon">
 *         <Icon icon="ChevronRight" />
 *       </Button>
 *       <Input />
 *       <Label>100 KM</Label>
 *       <Button variant="primary" size="icon">
 *         <Icon icon="ChevronRight" />
 *       </Button>
 *     </InputGroup>
 *     <FormMessage>And the optional message</FormMessage>
 *   </FormGroup>
 * </Box>
 * )
 * @example <caption>Example 2: the same input with errors</caption>
 * return (
 * <Box py="xl">
 *   <FormGroup error>
 *     <Label required>Name</Label>
 *     <InputGroup>
 *       <Button variant="primary" size="icon">
 *         <Icon icon="ChevronRight" />
 *       </Button>
 *       <Input />
 *       <Label>100 KM</Label>
 *       <Button variant="primary" size="icon">
 *         <Icon icon="ChevronRight" />
 *       </Button>
 *     </InputGroup>
 *     <FormMessage>And the optional message</FormMessage>
 *   </FormGroup>
 * </Box>
 * )
 * @example <caption>Example 3: disabled field</caption>
 * return (
 * <Box py="xl">
 *   <FormGroup disabled>
 *     <Label>Disabled field</Label>
 *     <InputGroup>
 *       <Input disabled />
 *     </InputGroup>
 *     <FormMessage />
 *   </FormGroup>
 * </Box>
 * )
 * @example <caption>Example 4: with a link</caption>
 * return (
 * <Box py="xl">
 *   <FormGroup>
 *     <Label>Some form data with button link</Label>
 *     <InputGroup>
 *       <Input />
 *       <Link href="#someHref">This is link</Link>
 *     </InputGroup>
 *     <FormMessage />
 *   </FormGroup>
 * </Box>
 * )
 */
const FormGroup = _styledComponents.default.div.withConfig({
  displayName: "form-group__FormGroup",
  componentId: "sc-1r7v1ei-0"
})(["width:100%;", ";", ";", ";& > ", "{width:100%;}& ", "{", ";", ";&:hover{border-color:", ";}}& ", "{", ",", ":last-child,", ":last-child{", ";}}"], ({
  error
}) => error ? formGroupWithErrorCSS : '', ({
  disabled
}) => disabled ? formGroupDisabledCSS : '', _styledSystem.space, _input.Input, _input.Input, ({
  variant,
  theme
}) => variant === 'filter' ? `border-color: ${theme.colors.filterInputBorder}` : '', ({
  variant,
  theme
}) => variant === 'filter' ? `color: ${theme.colors.white}` : '', ({
  variant,
  theme
}) => variant === 'filter' ? theme.colors.grey60 : theme.colors.grey60, _inputGroup.default, _label.Label, _button.Button, _link.Link, ({
  variant,
  theme
}) => variant === 'filter' ? `border-color: ${theme.colors.filterInputBorder}` : '');

exports.FormGroup = FormGroup;
FormGroup.defaultProps = {
  mb: 'lg'
};
var _default = FormGroup;
exports.default = _default;