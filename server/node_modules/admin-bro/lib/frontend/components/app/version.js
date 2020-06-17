"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designSystem = require("../design-system");

var _hooks = require("../../hooks");

var _cssClass = require("../design-system/utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VersionItem = (0, _styledComponents.default)(_designSystem.Text).withConfig({
  displayName: "version__VersionItem",
  componentId: "rgspw3-0"
})(["padding:12px 24px 12px 0;"]);
VersionItem.defaultProps = {
  display: ['none', 'block'],
  color: 'grey100'
};

const Version = props => {
  const {
    versions
  } = props;
  const {
    admin,
    app
  } = versions;
  const {
    translateLabel
  } = (0, _hooks.useTranslation)();
  return _react.default.createElement(_designSystem.Box, {
    flex: true,
    flexGrow: 1,
    py: "default",
    px: "xxl",
    className: (0, _cssClass.cssClass)('Version')
  }, admin && _react.default.createElement(VersionItem, null, translateLabel('adminVersion', {
    version: admin
  })), app && _react.default.createElement(VersionItem, null, translateLabel('appVersion', {
    version: app
  })));
};

var _default = Version;
exports.default = _default;