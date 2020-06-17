"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _sidebarBranding = _interopRequireDefault(require("./sidebar-branding"));

var _sidebarParent = _interopRequireDefault(require("./sidebar-parent"));

var _sidebarPages = _interopRequireDefault(require("./sidebar-pages"));

var _groupResources = _interopRequireDefault(require("./utils/group-resources"));

var _designSystem = require("../../design-system");

var _sidebarFooter = _interopRequireDefault(require("./sidebar-footer"));

var _useTranslation = require("../../../hooks/use-translation");

var _cssClass = require("../../design-system/utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Sidebar = props => {
  const {
    isVisible
  } = props;
  const [branding, resources, pages] = (0, _reactRedux.useSelector)(state => [state.branding, state.resources, state.pages]);
  const {
    translateLabel
  } = (0, _useTranslation.useTranslation)();
  return _react.default.createElement(_designSystem.Navigation, {
    className: isVisible ? 'visible' : 'hidden',
    position: ['absolute', 'absolute', 'absolute', 'absolute', 'inherit']
  }, _react.default.createElement(_designSystem.Box, {
    flexShrink: 0,
    px: "lg",
    pb: "xxl",
    className: (0, _cssClass.cssClass)('Logo')
  }, _react.default.createElement(_sidebarBranding.default, {
    branding: branding
  })), _react.default.createElement(_designSystem.Box, {
    flexGrow: 1,
    className: (0, _cssClass.cssClass)('Resources')
  }, _react.default.createElement(_designSystem.Label, {
    uppercase: true,
    ml: "lg",
    color: "grey60"
  }, translateLabel('navigation')), (0, _groupResources.default)(resources).map(parent => _react.default.createElement(_sidebarParent.default, {
    parent: parent,
    key: parent.name
  }))), _react.default.createElement(_sidebarPages.default, {
    pages: pages
  }), branding.softwareBrothers && _react.default.createElement(_sidebarFooter.default, null));
};

var _default = Sidebar;
exports.default = _default;