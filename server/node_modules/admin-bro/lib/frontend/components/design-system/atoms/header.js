"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Header = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _button = require("./button");

var _cssClass = require("../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Base = _styledComponents.default.h3.withConfig({
  displayName: "header__Base",
  componentId: "sc-166yp31-0"
})(["font-family:", ";vertical-align:middle;margin:", " 0;padding:0;*{vertical-align:middle;}& ", ",a{vertical-align:bottom;}", ";", ";"], ({
  theme
}) => theme.font, ({
  theme
}) => theme.space.default, _button.Button, _styledSystem.typography, _styledSystem.space);

Base.defaultProps = {
  fontWeight: 'normal',
  fontSize: 'h3',
  lineHeight: 'xl',
  className: (0, _cssClass.cssClass)(['Header', 'H3'])
};
const H1 = (0, _styledComponents.default)(props => _react.default.createElement(Base, _extends({
  as: "h1"
}, props))).withConfig({
  displayName: "header__H1",
  componentId: "sc-166yp31-1"
})([""]);
exports.H1 = H1;
H1.defaultProps = {
  fontSize: 'h1',
  lineHeight: 'xxl',
  className: (0, _cssClass.cssClass)(['Header', 'H1'])
};
const H2 = (0, _styledComponents.default)(props => _react.default.createElement(Base, _extends({
  as: "h2"
}, props))).withConfig({
  displayName: "header__H2",
  componentId: "sc-166yp31-2"
})(["& ", ",a{margin-bottom:4px;}"], _button.Button);
exports.H2 = H2;
H2.defaultProps = {
  fontSize: 'h2',
  lineHeight: 'xxl',
  className: (0, _cssClass.cssClass)(['Header', 'H2'])
};
const H3 = Base;
exports.H3 = H3;
const H4 = (0, _styledComponents.default)(props => _react.default.createElement(Base, _extends({
  as: "h4"
}, props))).withConfig({
  displayName: "header__H4",
  componentId: "sc-166yp31-3"
})([""]);
exports.H4 = H4;
H4.defaultProps = {
  fontSize: 'h4',
  lineHeight: 'xl',
  className: (0, _cssClass.cssClass)(['Header', 'H4'])
};
const H5 = (0, _styledComponents.default)(props => _react.default.createElement(Base, _extends({
  as: "h5"
}, props))).withConfig({
  displayName: "header__H5",
  componentId: "sc-166yp31-4"
})([""]);
exports.H5 = H5;
H5.defaultProps = {
  fontSize: 'xl',
  lineHeight: 'lg',
  className: (0, _cssClass.cssClass)(['Header', 'H5'])
};
const H6 = (0, _styledComponents.default)(props => _react.default.createElement(Base, _extends({
  as: "h6"
}, props))).withConfig({
  displayName: "header__H6",
  componentId: "sc-166yp31-5"
})([""]);
exports.H6 = H6;
H6.defaultProps = {
  fontSize: 'lg',
  lineHeight: 'lg',
  className: (0, _cssClass.cssClass)(['Header', 'H6'])
};
/**
 *
 * The Header component is a base for all text components intended as headings.
 *
 * Usage
 * ```javascript
 * import { H1, H2, H3, H4, H5, H6, HeaderProps } from 'admin-bro'
 *
 * // or
 *
 * import { Header } from 'admin-bro'
 * // Header.H1
 * ```
 * By default, the Heading component renders an __h3__ element.
 *
 * @component
 * @subcategory Atoms
 * @example
 * return (
 * <Box py="lg">
 *   <Header.H1>H1 Header - 40</Header.H1>
 *   <Text variant="sm" mb={5}>Roboto 40 - line height - 40</Text>
 *   <Header.H2>H2 Header - 32</Header.H2>
 *   <Text variant="sm" mb={5}>Roboto 32 - line height - 40</Text>
 *   <Header.H3>H3 Header - 28</Header.H3>
 *   <Text variant="sm" mb={5}>Roboto 28 - line height - 32</Text>
 *   <Header.H4>H4 Header - 24</Header.H4>
 *   <Text variant="sm" mb={5}>Roboto 24 - line height - 32</Text>
 *   <Header.H5>H5 Header - 18</Header.H5>
 *   <Text variant="sm" mb={5}>Roboto 18 - line height - 24</Text>
 *   <Header.H6>H6 Header - 16</Header.H6>
 *   <Text variant="sm" mb={5}>Roboto 16 - line height - 24</Text>
 * </Box>
 * )
 *
 *
 */

const Header = H3;
exports.Header = exports.default = Header;
Header.H1 = H1;
Header.H2 = H2;
Header.H3 = H3;
Header.H4 = H4;
Header.H5 = H5;
Header.H6 = H6;