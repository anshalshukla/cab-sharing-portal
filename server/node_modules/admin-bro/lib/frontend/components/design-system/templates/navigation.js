"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _box = require("../atoms/box");

var _cssClass = require("../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
const Navigation = (0, _styledComponents.default)(_box.Box).withConfig({
  displayName: "navigation__Navigation",
  componentId: "sc-1bfbg8s-0"
})(["height:100%;width:", ";padding:", ";display:flex;flex-direction:column;overflow:auto;border-right:1px solid ", ";flex-shrink:0;background:", ";z-index:50;transition:all 500ms;left:0;&.hidden{left:-", ";transition:all 500ms;}"], ({
  theme
}) => theme.sizes.sidebarWidth, ({
  theme
}) => theme.space.lg, ({
  theme
}) => theme.colors.grey20, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.sizes.sidebarWidth);
exports.Navigation = Navigation;
Navigation.defaultProps = {
  className: (0, _cssClass.cssClass)('Navigation')
};