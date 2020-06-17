"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designSystem = require("../../design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const StyledWrapper = (0, _styledComponents.default)(_designSystem.Box).withConfig({
  displayName: "wrapper__StyledWrapper",
  componentId: "gd2y70-0"
})(["& ", "{background:", ";padding:", ";overflow:visible;}& ", "{background:", ";padding:0 ", " ", ";}"], _designSystem.DrawerContent, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.space.xxl, _designSystem.DrawerFooter, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.space.xxl, ({
  theme
}) => theme.space.xxl);

const Wrapper = props => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    children,
    variant,
    color,
    ...rest
  } = props;
  return _react.default.createElement(StyledWrapper, _extends({}, rest, {
    variant: "grey",
    mx: "auto"
  }), children);
};

var _default = Wrapper;
exports.default = _default;