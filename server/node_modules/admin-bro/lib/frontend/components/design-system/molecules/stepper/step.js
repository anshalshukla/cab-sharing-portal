"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Step = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _icon = _interopRequireDefault(require("../../atoms/icon"));

var _text = _interopRequireDefault(require("../../atoms/text"));

var _box = _interopRequireDefault(require("../../atoms/box"));

var _cssClass = require("../../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Circle = (0, _styledComponents.default)(_box.default).withConfig({
  displayName: "step__Circle",
  componentId: "lwj9a7-0"
})(["border-width:1px;border-style:solid;border-radius:9999px;text-align:center;"]);
Circle.defaultProps = {
  py: 'default',
  px: 'default',
  minWidth: '34px',
  height: '34px'
};

const StyledStep = _styledComponents.default.div.withConfig({
  displayName: "step__StyledStep",
  componentId: "lwj9a7-1"
})(["flex:1 1 0px;display:flex;flex-direction:row;& > ", "{", ";border-bottom:2px solid ", ";}", ";"], _box.default, ({
  disabled
}) => !disabled ? 'cursor: pointer' : '', ({
  active,
  theme
}) => active ? theme.colors.primary100 : 'transparent', _styledSystem.space);
/**
 * Step represents one of the tab in placed inside {@link Stepper} component.
 * You can use it alone or with before-mentioned {@link Stepper}.
 *
 * @subcategory Molecules
 * @component
 * @example <caption>Regular step</caption>
 * return (
 *   <Box p="default">
 *     <Step number="1">Normal Step</Step>
 *  </Box>
 * )
 *
 * @example <caption>Active steps</caption>
 * return (
 *   <Box p="default">
 *     <Step number="1" active>I am active</Step>
 *  </Box>
 * )
 *
 * @example <caption>Active steps</caption>
 * return (
 *   <Box p="default">
 *     <Step number="1" completed>This was done !!!</Step>
 *  </Box>
 * )
 *
 * @example <caption>Clickable step</caption>
 * const onClick = () => alert('Why did you click me?')
 *
 * return (
 *   <Box p="default">
 *     <Step number="1" onClick={onClick}>Click me if you dare</Step>
 *  </Box>
 * )
 *
 */


const Step = props => {
  const {
    number,
    completed,
    children,
    active,
    disabled,
    onClick,
    className
  } = props;
  return _react.default.createElement(StyledStep, {
    active: active,
    disabled: disabled || !onClick,
    className: (0, _cssClass.cssClass)('Step', className)
  }, _react.default.createElement(_box.default, {
    flexShrink: 1,
    flexGrow: 0,
    flex: true,
    flexDirection: "row",
    pt: "lg",
    pb: "default",
    onClick: () => !disabled && onClick && onClick(number)
  }, _react.default.createElement(Circle, {
    bg: completed ? 'grey40' : 'transparent',
    borderColor: active ? 'primary100' : 'grey40',
    color: active ? 'primary100' : 'grey40'
  }, completed ? _react.default.createElement(_icon.default, {
    icon: "Checkmark",
    color: "white"
  }) : number), _react.default.createElement(_text.default, {
    my: "sm",
    pl: "default",
    py: "sm",
    color: active || completed ? 'grey100' : 'grey40'
  }, children)));
};

exports.Step = Step;
var _default = Step;
exports.default = _default;