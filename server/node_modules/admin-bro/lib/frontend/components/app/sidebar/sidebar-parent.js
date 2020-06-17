"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _sidebarResource = _interopRequireDefault(require("./sidebar-resource"));

var _designSystem = require("../../design-system");

var _hooks = require("../../../hooks");

var _cssClass = require("../../design-system/utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SidebarParent = props => {
  const {
    parent
  } = props;
  const {
    icon,
    name,
    resources
  } = parent;
  const {
    translateLabel
  } = (0, _hooks.useTranslation)();

  if (!parent.name) {
    return _react.default.createElement(_designSystem.Box, {
      pl: "default",
      pb: "xl",
      pt: "sm",
      ml: "sm",
      className: (0, _cssClass.cssClass)('SidebarParent')
    }, resources.map(resource => _react.default.createElement(_sidebarResource.default, {
      resource: resource,
      key: resource.id
    })));
  }

  return _react.default.createElement(_designSystem.NavGroup, {
    icon: icon,
    title: translateLabel(name)
  }, resources.map(resource => _react.default.createElement(_sidebarResource.default, {
    resource: resource,
    key: resource.id
  })));
};

var _default = SidebarParent;
exports.default = _default;