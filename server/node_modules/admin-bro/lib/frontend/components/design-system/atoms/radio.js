"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Radio = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _checkBox = require("./check-box");

var _focusShadow = _interopRequireDefault(require("../utils/focus-shadow.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Circle = _styledComponents.default.span.withConfig({
  displayName: "radio__Circle",
  componentId: "i3rnxq-0"
})(["display:block;width:8px;height:8px;margin-left:-4px;margin-top:-4px;border-radius:9999px;background:", ";position:absolute;top:50%;left:50%;"], ({
  theme
}) => theme.colors.white); // Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually


const HiddenRadio = _styledComponents.default.input.attrs({
  type: 'radio'
}).withConfig({
  displayName: "radio__HiddenRadio",
  componentId: "i3rnxq-1"
})(["border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;"]);

const radioBackground = (theme, checked, disabled) => {
  if (checked) {
    return disabled ? theme.colors.grey40 : theme.colors.primary100;
  }

  return theme.colors.white;
};

const StyledRadio = _styledComponents.default.span.withConfig({
  displayName: "radio__StyledRadio",
  componentId: "i3rnxq-2"
})(["display:inline-block;width:16px;cursor:pointer;border:1px solid ", ";border-radius:1000px;height:16px;transition:all 150ms;position:relative;", ":focus + &{", ";}", ":hover + &{border-color:", ";}", "{visibility:", ";}background:", ";"], ({
  theme
}) => theme.colors.grey40, HiddenRadio, ({
  theme
}) => `box-shadow: ${(0, _focusShadow.default)(theme)}`, HiddenRadio, ({
  theme
}) => theme.colors.grey60, Circle, ({
  checked
}) => checked ? 'visible' : 'hidden', ({
  checked,
  theme,
  disabled
}) => radioBackground(theme, checked, disabled));

/**
 * @typedef {object} RadioProps
 * @alias RadioProps
 * @memberof Radio
 * @property {string} [...] All props default to _radio_ html input like `onChange`,
 *                          `checked` etc.
 */

/**
 * Wrapped radio input.
 *
 * Usage:
 * ```javascript
 * import { Radio, RadioProps } from 'admin-bro'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @example
 * return (
 *   <Box p="xl">
 *      <Radio id="radio1"/>
 *      <Label inline htmlFor="radio1" ml="default">Some example label</Label>
 *   </Box>
 * )
 */
const Radio = props => {
  const {
    className,
    checked,
    onChange,
    disabled,
    ...restProps
  } = props;
  const [isChecked, setChecked] = (0, _react.useState)(checked !== null && checked !== void 0 ? checked : false);
  const actuallyChecked = checked !== null && checked !== void 0 ? checked : isChecked;

  const handleChange = event => {
    setChecked(!event.target.checked);

    if (onChange) {
      onChange(event);
    }
  };

  return _react.default.createElement(_checkBox.CheckboxRadioContainer, {
    className: className
  }, _react.default.createElement(HiddenRadio, _extends({
    checked: actuallyChecked,
    onChange: handleChange
  }, restProps, {
    disabled: disabled
  })), _react.default.createElement(StyledRadio, {
    checked: actuallyChecked,
    onClick: event => handleChange && handleChange(event),
    disabled: disabled
  }, _react.default.createElement(Circle, null)));
};

exports.Radio = Radio;
var _default = Radio;
exports.default = _default;