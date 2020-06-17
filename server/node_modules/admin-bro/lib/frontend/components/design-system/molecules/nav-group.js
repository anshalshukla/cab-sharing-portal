"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NavGroup = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icon = require("../atoms/icon");

var _box = require("../atoms/box");

var _text = require("../atoms/text");

var _cssClass = require("../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const NavGroupTitle = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "nav-group__NavGroupTitle",
  componentId: "cgnh9m-0"
})(["padding:11px 20px;color:", ";border-radius:9999px;display:flex;cursor:pointer;& > ", "{display:block;flex-grow:1;line-height:", ";}& svg{vertical-align:middle;padding-bottom:2px;flex-shrink:0;}& svg:first-child{padding-right:", ";}& svg:last-child{}"], ({
  theme
}) => theme.colors.grey100, _text.Text, ({
  theme
}) => theme.lineHeights.default, ({
  theme
}) => theme.space.lg);
NavGroupTitle.defaultProps = {
  className: (0, _cssClass.cssClass)('NavGroupTitle')
};
/**
 * @memberof NavGroup
 * @alias NavGroupProps
 */

/**
 * NavGroup is used in a navigation sidebar to group similar elements
 *
 * Usage
 * ```javascript
 * import { NavGroup, NavGroupProps } from 'admin-bro'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @example
 * return (
 *   <Box py="xl">
 *     <NavGroup title="Some group title" icon="Add">
 *       <Text>Some group element</Text>
 *     </NavGroup>
 *   </Box>
 * )
 */
const NavGroup = props => {
  const {
    title,
    icon,
    children
  } = props;
  const [isItOpen, toggleOpen] = (0, _react.useState)(true);
  const chevron = isItOpen ? 'ChevronUp' : 'ChevronDown';
  return _react.default.createElement(_box.Box, {
    className: (0, _cssClass.cssClass)('NavGroup')
  }, _react.default.createElement(NavGroupTitle, {
    onClick: () => toggleOpen(!isItOpen),
    bg: isItOpen ? 'grey20' : 'transparent'
  }, _react.default.createElement(_icon.Icon, {
    icon: icon || 'Settings'
  }), _react.default.createElement(_text.Text, null, title), _react.default.createElement(_icon.Icon, {
    icon: chevron
  })), isItOpen ? _react.default.createElement(_box.Box, {
    pl: "x3",
    pb: "xl",
    pt: "sm"
  }, children) : '');
};

exports.NavGroup = NavGroup;
var _default = NavGroup;
exports.default = _default;